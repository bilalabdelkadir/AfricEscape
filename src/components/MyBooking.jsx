import React, { useState, useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import { fetchMyBooking, cancelBooking } from "../utils/api";
import Spinner from "./Spinner";

const myBooking = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const [myBooking, setMyBooking] = useState();
  const [isloading, setIsloading] = useState(true);
  const [cancelmessage, setCancelmessage] = useState("");

  const onCancel = async (e, id) => {
    e.preventDefault();
    try {
      const res = await cancelBooking(token, id);
      console.log(res);
      setCancelmessage("Booking Cancelled");
      setMyBooking({data: myBooking.data.filter(b => b._id !== id)})
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchMyBookingData = async () => {
      const myBooking = await fetchMyBooking(token);
      setMyBooking(myBooking);
      setIsloading(false);
      console.log(myBooking);
    };
    fetchMyBookingData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-center font-bold my-5"> Your Booking</h1>
      {cancelmessage && (
        <p className="bg-green-300 tect-green-500">{cancelmessage}</p>
      )}
      {isloading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center">
          {myBooking &&
            myBooking.data.map((booking) => (
              <div
                key={booking.id}
                className="w-full md:w-[90%] bg-green-100 shadow-xl text-white flex flex-col md:flex-row justify-between items-center mx-auto my-5 p-5 rounded-xl"
              >
                <div className="w-full md:w-[50%] mb-5 md:mb-0">
                  <img
                    className="object-cover w-full h-48 md:h-full"
                    src={`https://africescape-api.onrender.com/img/tours/${booking.tour.imageCover}`}
                    alt="Mountain"
                  />
                </div>
                <div className="text-center w-full md:w-[50%] ">
                  <h2 className="text-2xl font-bold">{booking.tour.name}</h2>
                  <p>
                    {new Date(booking.createdAt).toLocaleString("en-us", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p>
                    {booking.paid ? <span>paid</span> : <span>not paid</span>}
                  </p>

                  <button
                    onClick={(e) => onCancel(e, booking._id)}
                    className="text-gray-800 border-2 border-gray-800 rounded-md py-2 px-5 mt-5 md:mt-0"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          {!myBooking ||
            (myBooking.data.length === 0 && <p>you have no booking</p>)}
        </div>
      )}
    </div>
  );
};

export default myBooking;
