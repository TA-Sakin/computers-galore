import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import useTools from "../../../hooks/useTools";

const Tools = () => {
  const [tools] = useTools();
  return (
    <div className="my-32 lg:px-28">
      <div className="lg:pl-8 lg:text-left px-4 text-center">
        <h1 className="text-2xl uppercase md:text-3xl font-bold text-primary ">
          Computers Galore Exclusive
        </h1>
        <h1 className="text-xl  md:text-2xl mb-10 font-bold">
          A curated selection of our classic gear—exclusively priced with full
          warranty
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center mx-auto">
        {tools.slice(0, 3).map((tool) => (
          <>
            <div class="card card-compact bg-base-100 mb-12 rounded-none w-[350px] sm:w-96 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-300">
              <figure>
                <img
                  src={tool.image}
                  alt=""
                  className="bg-black h-[320px] w-full object-cover"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p className="text-xl">Price: ${tool.price}</p>
                <p>{tool.description}</p>
                <p>Available quantity: {tool.avail_quantity}</p>
                <p>Minimum orderable quantity: {tool.min_quantity}</p>
                <div class="card-actions justify-center">
                  <button class="btn bg-black rounded-none w-full mt-8">
                    {/* Shop Now <AiOutlineRight className="ml-1" /> */}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Tools;
