import React from "react";

function Rating({ rating }) {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0l2.5 7.5H20l-6.25 4.583 2.5 7.917L10 15l-6.25 4.583 2.5-7.917L0 7.5h7.5z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 0l2.5 7.5H20l-6.25 4.583 2.5 7.917L10 15l-6.25 4.583 2.5-7.917L0 7.5h7.5z" />
        </svg>
      ))}
    </div>
  );
}

export default Rating;
