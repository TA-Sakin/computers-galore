import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);

  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [quantity, setQuantity] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    const getResults = async () => {
      const results = await axios(
        `https://stark-caverns-79279.herokuapp.com/tools/${id}`
      );
      setTool(results.data);
      setQuantity(results.data);
    };
    getResults();
  }, [id]);

  // const handleChange = (e) => {
  //   setQuantity((quantity) => ({ ...quantity, min_quantity: e.target.value }));
  // };
  const onSubmit = (data) => {
    if (data) {
      const order = {
        username: user?.displayName,
        email: user?.email,
        product: tool?.name,
        ordered_quantity: parseInt(data?.min_quantity),
        price: tool?.price,
        image: tool?.image,
        phone: data.phone,
        address: data.address,
      };
      fetch("https://stark-caverns-79279.herokuapp.com/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Order completed", { closeOnClick: true });
            setQuantity({ ...quantity, min_quantity: "" });
            reset();
          }
        });
    }
  };

  return (
    <div>
      <div className="hero w-full mx-auto ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card lg:card-side bg-base-100 border-2">
            <img className="object-cover" src={tool.image} alt="Shoes" />
            <div className="card-body ">
              <h2 className="card-title">{tool.name}</h2>
              <h3>{tool.description}</h3>
              <h3 className="text-lg">Price: ${tool.price}</h3>
              <h3>Available product: {tool.avail_quantity}</h3>
              <h3>Minmum orderable: {tool.min_quantity}</h3>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    readOnly
                    type="name"
                    value={user?.displayName}
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    readOnly
                    type="text"
                    value={user?.email}
                    className="input input-bordered rounded-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Order quantity"
                    value={quantity?.min_quantity}
                    className="input input-bordered rounded-none"
                    {...register("min_quantity", {
                      onChange: (e) =>
                        setQuantity((quantity) => ({
                          ...quantity,
                          min_quantity: e.target.value,
                        })),
                      required: {
                        value: true,
                        message: "Order quantity is required",
                      },
                      min: {
                        value: tool?.min_quantity,
                        message: `You have to order minimum ${tool?.min_quantity} pc`,
                      },
                      max: {
                        value: tool?.avail_quantity,
                        message: "Shortage in stock",
                      },
                    })}
                  />
                  {errors.min_quantity?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.min_quantity.message}
                    </span>
                  )}
                  {errors.min_quantity?.type === "min" && (
                    <span className="text-sm text-red-500">
                      {errors.min_quantity.message}
                    </span>
                  )}
                  {errors.min_quantity?.type === "max" && (
                    <span className="text-sm text-red-500">
                      {errors.min_quantity.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-none"
                    placeholder="Phone number"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                      pattern: {
                        value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                        message: "Provide a valid BD phone number",
                      },
                    })}
                  />
                  {errors.phone?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <span className="text-sm text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    placeholder="Your address"
                    type="text"
                    className="input input-bordered rounded-none"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  {errors.address?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-black rounded-none w-full max-w-sm"
                    value="Order"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
