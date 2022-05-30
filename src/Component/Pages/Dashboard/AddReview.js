import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
const AddReview = () => {
  const [rating, setRating] = useState(5);
  // const [review, setReview] = useState([]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.desc.value;
    if (rating) {
      const review = {
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
            toast.success("Thanks for your review.");
          }
        });
    }
  };

  return (
    <div>
      <h3>Rate our product</h3>
      <div>
        <p>
          <ReactStars
            value={5}
            edit={true}
            onChange={ratingChanged}
            size={24}
            a11y={true}
            activeColor="#ffd700"
          />
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              name="desc"
              placeholder="Review"
              class="input input-bordered w-full max-w-xs"
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </p>
      </div>
    </div>
  );
};
// https://meet.google.com/fkd-rmhz-zqw
export default AddReview;
