import React, { useEffect, useState } from "react";
import { fetchUser } from "../utils/api";
import { useAuth } from "../Hooks/useAuth";
import { updateMe } from "../utils/api";
import { CgProfile } from "react-icons/cg";
import Config from "../utils/config";
import Spinner from "./Spinner";

const Setting = () => {
  const { authState } = useAuth();
  const { token } = authState;
  const [user, setUser] = useState({});
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profilePic, setProfile] = useState(null);
  const [profileToShow, setProfileToShow] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await fetchUser(token);
        setUser(user);
        setname(user.data.name);
        setemail(user.data.email);
        if (user.data.photo === "undefined") {
          setProfile(null);
          setProfileToShow(null);
        } else {
          setProfile(user.data.photo);
          setProfileToShow(user.data.photo);
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
        // formData.append('photo', document.getElementById('photo').files[0]);
      }

      const res = await updateMe(formData, token)
      setProfileToShow(res.data.data.photo)
      setPreview(null)
      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      setErrorMessage("Failed to update profile. Please try again.");
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
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Update Your Profile</h1>
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
                src={`${Config.userPic}/${profileToShow}`}
                alt="profile"
                className="rounded-full h-24 w-24 object-cover"
              />
            </div>
          )}
          <form
            className="flex flex-col items-center gap-2"
            onSubmit={onUpdate}
            disabled={!isEditing}
          >
            <label htmlFor="name" className="text-gray-800">
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
              disabled={!isEditing}
            />

            <label htmlFor="email" className="text-gray-800">
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
              disabled={!isEditing}
            />

            <label htmlFor="photo" className="text-gray-800">
              Profile Picture
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="border border-gray-500 rounded-md p-2"
              onChange={handleFileChange}
              disabled={!isEditing}
            />
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="h-24 w-24 object-cover rounded-full"
              />
            )}
            {isEditing ? (
              <>
                <button
                  className="bg-blue-500 text-white rounded-md p-2"
                  type="submit"
                >
                  Update
                </button>
                <button
                  className="bg-gray-500 text-white rounded-md p-2"
                  type="button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="bg-blue-500 text-white rounded-md p-2"
                type="button"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default Setting;
