import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await axios("tools.json");
      setTools(results.data);
    };
    getResults();
  }, []);
  console.log(tools);
  return (
    <div className="flex-1 lg:flex justify-center gap-10 my-32">
      {tools.map((tool) => (
        <>
          <div class="card card-compact w-96 bg-base-100 rounded-none shadow-lg">
            <figure>
              <img src={tool.image} alt="" className="bg-black w-full" />
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
  );
};

export default Tools;
