import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTour } from "../utils/api";
import Spinner from "../components/Spinner";
import NavBar from "../components/NavBar";
import Slider from "react-slick";
import Reviews from "../components/Reviews";
import Book from "../components/Book";
import Footer from "../components/Footer";

const TourPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [tour, setTour] = useState({});
  useEffect(() => {
    const fetchTourData = async () => {
      const tour = await fetchTour(id);
      setTour(tour);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      console.log(tour);
    };
    fetchTourData();
  }, []);

  return (
    <>
      <div className="mb-24">
        <NavBar />
        {isLoading ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="mt-20 max-w-[1240px] mx-auto ">
            <h1 className="text-4xl text-option md:text-6xl md:m-10 text-center font-bold m-3 ">
              {tour.name}
            </h1>

            <div className="flex flex-col md:flex-row lg:flex-row md:justify-around m-4 p-4 max-w-[1200px] new-shadow-2">
              <div className="w-[90%] md:w-[45%] flex flex-col items-center p-4">
                <h1 className="text-3xl w-[90%] text-gray-500 text-center font-bold mb-2">
                  About {tour.name} Tour
                </h1>
                <p className="text-md m-3 text-center font-medium text-gray-500">
                  {tour.description}
                </p>
              </div>
              <div className="w-[90%] md:w-[45%]  p-4">
                {tour.guides && (
                  <>
                    <h1 className="text-3xl text-gray-500 text-center font-bold mb-2">
                      Guides
                    </h1>
                    <div className="flex flex-col gap-2 w-full items-center">
                      {tour.guides.map((guide) => (
                        <div
                          key={guide.id}
                          className="w-[80%] gap-2 flex items-center new-shadow-2 overflow-hidden"
                        >
                          <div className="w-24 h-24 p-2">
                            <img
                              className="w-full h-full object-cover rounded-full"
                              src={`https://africescape-api.onrender.com/img/users/${guide.photo}`}
                              alt="Mountain"
                            />
                          </div>
                          <div className="flex flex-col ml-4">
                            <h1 className="font-semibold text-gray-600">
                              {guide.name}
                            </h1>
                            <p className=" text-gray-500">{guide.role}</p>
                            <p className=" text-gray-500">{guide.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="m-10">
              <Slider {...settings}>
                {tour.images &&
                  tour.images.map((image) => (
                    <img
                      className="w-[100wh] h-[40vh] md:w-[70wh] md:h-[70vh] object-cover md:m-4"
                      src={`https://africescape-api.onrender.com/img/tours/${image}`}
                      alt="Mountain"
                      key={image.id}
                    />
                  ))}
              </Slider>
            </div>
            {tour.reviews && (
              <div>
                <h1 className="text-4xl text-center font-bold">Reviews</h1>
                <div>
                  <Reviews reviews={tour.reviews} />
                </div>
              </div>
            )}
            <Book />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TourPage;
