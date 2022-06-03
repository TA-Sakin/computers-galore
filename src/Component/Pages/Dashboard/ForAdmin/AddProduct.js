import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgStorageKey = "85af4a16326eb6123558d198cba862d3";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const tool = {
            name: data.name,
            price: parseFloat(data.price),
            avail_quantity: parseInt(data.avail_quantity),
            min_quantity: parseInt(data.min_quantity),
            description: data.description,
            image: img,
          };
          fetch("http://localhost:5000/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add a product");
              }
            });
        }
      });
  };
  return (
    <div>
      <h3 className="text-xl font-bold mt-5 ">Add New Products</h3>
      <div className="card flex-shrink-0 w-full max-w-md bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Product name"
                className="input input-bordered rounded-none"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              {errors.name?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered rounded-none"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
              />
              {errors.price?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.price.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                name="stock"
                placeholder="Available on stock"
                className="input input-bordered rounded-none"
                {...register("avail_quantity", {
                  required: {
                    value: true,
                    message: "Order quantity is required",
                  },
                })}
              />
              {errors.avail_quantity?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.avail_quantity.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Orderable quantity"
                className="input input-bordered rounded-none"
                {...register("min_quantity", {
                  required: {
                    value: true,
                    message: "Order quantity is required",
                  },
                })}
              />
              {errors.min_quantity?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.min_quantity.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Short description"
                type="description"
                className="textarea textarea-bordered rounded-none"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description quantity is required",
                  },
                })}
              />
              {errors.description?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <div className="flex justify-center">
                <div className="mb-3 w-96">
                  <label
                    htmlFor="formFile"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Input a product image
                  </label>
                  <input
                    className="block w-full px-3py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is required",
                      },
                    })}
                  />
                  {errors.image?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.image.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-black rounded-none w-full max-w-sm"
                value="Add"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
