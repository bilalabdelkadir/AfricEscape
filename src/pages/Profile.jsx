import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FiSettings, FiBriefcase, FiStar } from "react-icons/fi";
import { useState } from "react";
import Setting from "../components/Setting";

const Profile = () => {
  const [active, setActive] = useState("Setting");

  const Booking = () => <h1>Booking</h1>;
  const Review = () => <h1>Review</h1>;

  return (
    <>
      <div>
        <NavBar />

        <div className="py-28 max-w-[1200px] max-h-[90vh] mx-auto mb-20">
          <div className="flex">
            <div className="w-1/4 h-[80vh] new-shadow-2 rounded-l-2xl">
              <ul className="flex flex-col gap-y-4 m-4 ">
                <li
                  onClick={() => setActive("Setting")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Setting" && "bg-green-300"
                  }`}
                >
                  <FiSettings size={20} />
                  <h1 className=" hidden md:block">Setting</h1>
                </li>
                <li
                  onClick={() => setActive("Booking")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Booking" && "bg-green-300"
                  }`}
                >
                  <FiBriefcase size={20} />
                  <h1 className="hidden md:block">Booking</h1>
                </li>
                <li
                  onClick={() => setActive("Review")}
                  className={`rounded-2xl flex justify-center md:justify-start gap-4 items-center shadow-lg cursor-pointer p-4 hover:shadow-2xl ${
                    active == "Review" && "bg-green-300"
                  }`}
                >
                  <FiStar size={20} />
                  <h1 className="hidden md:block">My Review</h1>
                </li>
              </ul>
            </div>
            <div className="w-5/6 h-[80vh] bg-green-300 rounded-r-2xl  p-4 md:p-14">
              {/* display components based on active state data if setting display setting if booking */}
              {active === "Setting" && <Setting />}
              {active === "Booking" && <Booking />}
              {active === "Review" && <Review />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
