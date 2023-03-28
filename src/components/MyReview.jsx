import React, { useEffect, useState } from "react";
import { fetchUserReviews } from "../utils/api";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const MyReview = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchUserReviews(token);
        setReviews(response.data.data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [token]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-500 mb-10">My Reviews</h1>
      {isLoading ? (
        <div className="relative left-0 top-40">
          <Spinner />
        </div>
      ) : reviews.length > 0 ? (
        <div className="w-full md:w-3/4 lg:w-[90%] xl:w-2/3 flex flex-col items-center">
          {reviews.map((review) => (
            <div
              className="w-full bg-green-100 shadow-xl text-white flex flex-col md:flex-row justify-between items-center mx-auto my-2 p-5 rounded-xl"
              key={review._id}
            >
              <div className="w-full md:w-1/2 mb-5 md:mb-0">
                <img
                  src={
                    `https://africescape-api.onrender.com/img/tours/${review.tour.imageCover}` ||
                    "https://picsum.photos/200"
                  }
                  alt={review.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center w-full md:w-1/2 ">
                <h1 className="text-2xl font-bold mb-2">{review.tour.name}</h1>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(review.rating)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 fill-current text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.472l-5.246 3.178 1.002-5.814L.5 7.322l5.82-.843L10 1.5l3.68 5.98 5.82.843-4.256 4.514 1.002 5.814z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800">"{review.review}"</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-500 mb-10">
            You have not written any reviews yet
          </h1>
          <Link to="/explore">
            <button className="border-2 border-gray-800 text-gray-800 font-bold py-2 px-4 rounded">
              Go to Tours
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyReview;
