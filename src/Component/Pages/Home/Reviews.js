import React from "react";
import ReactStars from "react-rating-stars-component";
import useTools from "../../../hooks/useTools";

const Reviews = () => {
  const [tools] = useTools();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="mt-32 ">
      <h1 className="text-4xl text-center ml-4 mb-10 uppercase font-bold ">
        What Our Customers Say
      </h1>
      <div
        className={`carousel py-10 carousel-center mx-auto max-w-full p-4 space-x-4 bg-slate-400 ${
          tools.length <= 4 && "justify-center"
        }`}
      >
        {tools.map((tool) => (
          <div class="carousel-item w-[350px] ">
            <div class="card shadow-xl bg-gray-700 image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-800 duration-300">
              <figure>
                <img src={tool.image} alt="review" />
              </figure>
              <div class="card-body text-[#aaaaaa]">
                <h2 class="card-title ">{tool.name}</h2>
                <p className="text-xl">Price: ${tool.price}</p>
                <p className="text-white">{tool.description}</p>
                <p className="flex">
                  <span className="mt-[6px] mr-1"> Rating:</span>
                  <ReactStars
                    value={5}
                    edit={false}
                    onChange={ratingChanged}
                    size={24}
                    a11y={true}
                    activeColor="#ffd700"
                  />
                  {/* https://codesandbox.io/s/elegant-mountain-w3ngk?file=/src/App.js:278-289 */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
