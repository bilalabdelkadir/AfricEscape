import React, { useEffect, useState } from "react";
import { fetchUser } from "../utils/api";
import { useAuth } from "../Hooks/useAuth";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import Spinner from "./Spinner";

const Setting = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const [user, setUser] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profilePic, setProfile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await fetchUser(token);
        setUser(user);
        setname(user.data.name);
        setemail(user.data.email);
        if (user.data.photo === "undefined") {
          setProfile(null);
        } else {
          setProfile(user.data.photo);
          console.log(profilePic);
        }
        setisloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserData();
  }, []);

  const onUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      if (profilePic) {
        formData.append("photo", profilePic);
      }

      const res = await axios({
        method: "PATCH",
        url: "https://africescape-api.onrender.com/api/v1/users/updateMe",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text text-2xl font-bold text-gray-800">
        Update Your Profile
      </h1>
      {isloading ? (
        <Spinner />
      ) : (
        <>
          {!profilePic ? (
            <div className="rounded-full bg-white p-4">
              <CgProfile size={100} />
            </div>
          ) : (
            <div className="rounded-full bg-white p-4">
              <img
                src={`https://africescape-api.onrender.com/img/users/${profilePic}`}
                alt="profile"
                className="rounded-full h-24 w-24 object-cover"
              />
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="name" className="text ">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-500 rounded-md p-1"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <label htmlFor="email" className="text ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-500 rounded-md p-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

            <label htmlFor="photo" className="text ">
              Profile Picture
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="border border-gray-500 rounded-md p-2"
              onChange={handleFileChange}
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="rounded-full h-24 w-24 object-cover"
              />
            )}
          </div>

          <button
            className="bg-blue-500 text-white rounded-md p-2"
            onClick={onUpdate}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Setting;
