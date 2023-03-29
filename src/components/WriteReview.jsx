import React, { useState } from "react";
import { makeReview } from "../utils/api";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

const WriteReview = ({ tourId, token }) => {
  const queryClient = useQueryClient()
  
  const reviewMutation = useMutation(makeReview({ tourId, token }), {
    onSuccess: () => queryClient.invalidateQueries(['tour']),
    onError: (error) => console.log(error)
  } )
  
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [ratingError, setRatingError] = useState("");
  const [reviewTextError, setReviewTextError] = useState("");
  
  

  const handleRatingClick = (value) => {
    setRating(value);
    setRatingError("");
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
    setReviewTextError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form inputs
    let isValid = true;
    if (rating === 0) {
      setRatingError("Please select a rating");
      isValid = false;
    } else {
      setRatingError("");
    }
    if (reviewText.trim() === "") {
      setReviewTextError("Review text is required");
      isValid = false;
    } else if (reviewText.length > 500) {
      setReviewTextError("Review text must be 500 characters or less");
      isValid = false;
    } else {
      setReviewTextError("");
    }

    if (isValid) {
      setIsSubmitted(true);
      setReviewText("");
      setRating(0);
      try {
        // const response = await makeReview(tourId, reviewText, rating, token)
        // console.log(response.data);
        reviewMutation.mutate({reviewText, rating})
      } catch (error) {
        console.log(error.message);
      }
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
          {ratingError && <p className="text-red-500">{ratingError}</p>}
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
              className={`w-full border border-gray-400 p-2 rounded-md ${
                reviewTextError ? "border-red-500" : ""
              }`}
              value={reviewText}
              onChange={handleReviewTextChange}
            ></textarea>
          </div>
          {reviewTextError && <p className="text-red-500">{reviewTextError}</p>}
          {isSubmitted ? (
            <p className="text-green-500">Review submitted successfully!</p>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              disabled={rating === 0 || reviewText.length === 0}
            >
              Submit
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default WriteReview;
