import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
const AddReview = () => {
  const [rating, setRating] = useState(5);
  const [user] = useAuthState(auth);
  // const [review, setReview] = useState([]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.desc.value;
    if (rating) {
      const review = {
        name: user?.displayName,
        rating: rating,
        description: description,
      };
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success("Thanks for your feedback.");
            e.target.reset();
          }
        });
    }
  };

  return (
    <div>
      <h3 className="mt-3 mb-5">Rate our product</h3>
      <div>
        <div className="flex mb-1">
          <p className="mt-2 font-bold">Rating: </p>
          <p>
            <ReactStars
              value={5}
              edit={true}
              onChange={ratingChanged}
              size={24}
              a11y={true}
              activeColor="#ffb700"
            />
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            name="desc"
            placeholder="Write your feedback"
            className="input input-bordered w-full max-w-xs h-32"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary flex"
          />
        </form>
      </div>
    </div>
  );
};
export default AddReview;
