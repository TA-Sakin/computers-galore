import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

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
      const results = await axios(`http://localhost:5000/tools/${id}`);
      setTool(results.data);
      setQuantity(results.data);
    };
    getResults();
  }, [id]);

  const handleChange = (e) => {
    setQuantity({ ...quantity, min_quantity: e.target.value });
  };
  const onSubmit = async (data) => {
    if (data) {
      setQuantity({ ...quantity, min_quantity: "" });
      reset();
    }
    console.log(data);
  };

  return (
    <div class="hero w-full mx-auto ">
      <div class="hero-content flex-col lg:flex-row">
        <div class="card lg:card-side bg-base-100 border-2">
          <img className="object-cover" src={tool.image} alt="Shoes" />
          <div class="card-body ">
            <h2 class="card-title">{tool.name}</h2>
            <h3>{tool.description}</h3>
            <h3 className="text-lg">Price: ${tool.price}</h3>
            <h3>Available product: {tool.avail_quantity}</h3>
            <h3>Minmum orderable: {tool.min_quantity}</h3>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-md bg-base-100">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  disabled
                  type="name"
                  value={user?.displayName}
                  class="input input-bordered rounded-none"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  disabled
                  type="text"
                  value={user?.email}
                  class="input input-bordered rounded-none"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Order quantity"
                  value={quantity?.min_quantity}
                  // onChange={handleChange}
                  // value={tool?.min_quantity}
                  class="input input-bordered rounded-none"
                  {...register("min_quantity", {
                    onChange: (e) => handleChange(e),
                    required: {
                      value: true,
                      message: "Order quantity is required",
                    },
                    min: {
                      // value: parseInt(tool?.min_quantity),
                      value: tool?.min_quantity,
                      message: `You have to order minimum ${tool?.min_quantity} pc`,
                    },
                    max: {
                      // value: parseInt(tool?.avail_quantity),
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
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered rounded-none"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                    pattern: {
                      value: /^(?:(?:\+|00)88|01)?\d{11}$/,
                      message: "Provide a valid phone number",
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
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  placeholder="Your address"
                  type="text"
                  class="input input-bordered rounded-none"
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
              <div class="form-control mt-6">
                <input
                  className="btn bg-black rounded-none w-full max-w-sm"
                  value="Checkout"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
