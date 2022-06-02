import React from "react";
import { Link, Navigate } from "react-router-dom";
import useTools from "../../../hooks/useTools";

const AllTools = () => {
  const [tools] = useTools();

  return (
    <div className="my-20 lg:px-28">
      <div className="lg:pl-8 mb-10 lg:text-left px-4 text-center">
        <h1 className="text-2xl uppercase md:text-3xl font-bold text-primary ">
          Explore All Our Exclusive Products
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mx-auto">
        {tools?.map((tool) => (
          <>
            <div className="card card-compact bg-base-100 mb-12 rounded-none w-[350px] sm:w-96 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
              <figure>
                <img
                  src={tool.image}
                  alt=""
                  className="bg-black h-[320px] w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tool.name}</h2>
                <p className="text-xl">Price: ${tool.price}</p>
                <p>{tool.description}</p>
                <p>Available quantity: {tool.avail_quantity}</p>
                <p>Minimum orderable quantity: {tool.min_quantity}</p>
                <div className="card-actions justify-center">
                  <Link
                    className="btn bg-black rounded-none w-full mt-8"
                    to={`/purchase/${tool._id}`}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AllTools;
