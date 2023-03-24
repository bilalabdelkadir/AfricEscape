import Review from "./Review";

const Reviews = ({ reviews }) => {
  return (
    <div className="flex justify-between max-h-[30rem] max-w-[1200px] overflow-x-auto mx-auto">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
