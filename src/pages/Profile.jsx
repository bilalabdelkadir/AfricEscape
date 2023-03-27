import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FiSettings, FiBriefcase, FiStar } from "react-icons/fi";
import { useState } from "react";
import Setting from "../components/Setting";
import MyBooking from "../components/MyBooking";
import MyReview from "../components/MyReview";

const Profile = () => {
  const [active, setActive] = useState("Setting");

  return (
    <>
      <div>
        <NavBar />

        <div className="py-28 max-w-[1200px] min-h-[90vh] mx-auto mb-10">
          <div className="flex">
            <div className="w-1/4 min-h-[80vh] new-shadow-2 rounded-l-2xl">
              <ul className="flex flex-col gap-y-4 m-4 ">
                <li
                  onClick={() => setActive("Setting")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Setting" && "bg-green-200"
                  }`}
                >
                  <FiSettings size={20} />
                  <h1 className=" hidden md:block">Setting</h1>
                </li>
                <li
                  onClick={() => setActive("Booking")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Booking" && "bg-green-200"
                  }`}
                >
                  <FiBriefcase size={20} />
                  <h1 className="hidden md:block">Booking</h1>
                </li>
                <li
                  onClick={() => setActive("Review")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Review" && "bg-green-200"
                  }`}
                >
                  <FiStar size={20} />
                  <h1 className="hidden md:block">My Review</h1>
                </li>
              </ul>
            </div>
            <div className="w-5/6 min-h-[80vh] bg-green-200 rounded-r-2xl  p-4 md:p-14">
              {/* display components based on active state data if setting display setting if booking */}
              {active === "Setting" && <Setting />}
              {active === "Booking" && <MyBooking />}
              {active === "Review" && <MyReview />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
