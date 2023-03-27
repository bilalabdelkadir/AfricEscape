import React, { useState } from "react";
import axios from "axios";

const WriteReview = ({ tourId, token }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isopen, setIsOpen] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    try {
      const response = await axios.post(
        `https://africescape-api.onrender.com/api/v1/tours/${tourId}/reviews`,

        { review: reviewText, rating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2
        onClick={() => setIsOpen(!isopen)}
        className="text-2xl font-bold  mb-4 cursor-pointer text-option"
      >
        Write a Review
      </h2>

      {!isopen ? null : (
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <p className="text-gray-900 mr-4">Rate:</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`${
                    rating >= value ? "text-yellow-500" : "text-gray-400"
                  } text-2xl mr-2`}
                  onClick={() => handleRatingClick(value)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="review-text"
              className="block text-gray-900 font-bold mb-2"
            >
              Review:
            </label>
            <textarea
              id="review-text"
              name="review-text"
              rows="5"
              maxLength="500"
              className="w-full border border-gray-400 p-2 rounded-md"
              value={reviewText}
              onChange={handleReviewTextChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            disabled={rating === 0 || reviewText.length === 0}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default WriteReview;
