import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import useTools from "../../../hooks/useTools";

const Reviews = () => {
  const [tools] = useTools([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://stark-caverns-79279.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setReviews(data);
        }
      });
  }, []);
  return (
    <div className="mt-32">
      <h1 className="text-4xl text-center ml-4 mb-10 uppercase font-bold ">
        What Our Customers Say
      </h1>
      <div
        className={`carousel py-10 carousel-center mx-auto max-w-full p-4 space-x-4 bg-slate-300 ${
          tools?.length <= 4 && "justify-center"
        }`}
      >
        {reviews.map((review) => (
          <div className="carousel-item">
            <div className="card w-80 shadow-xl bg-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-gray-800 duration-300">
              <div className="avatar placeholder mx-auto mt-3">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                  <span className="text-3xl uppercase">
                    {review.name.slice(0, 2)}
                  </span>
                </div>
              </div>

              <div className="card-body text-[#aaaaaa]">
                <p className="text-white">{review.description}</p>
                <p className="flex">
                  <span className="mt-[6px] mr-1"> Rating: </span>
                  <ReactStars
                    value={review.rating}
                    edit={false}
                    size={24}
                    a11y={true}
                    activeColor="#ffd700"
                  />
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
