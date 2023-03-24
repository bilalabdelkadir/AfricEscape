import axios from "axios";

export const fetchTours = async () => {
  try {
    const response = await axios.get(
      "https://africescape-api.onrender.com/api/v1/tours"
    );
    return response.data.data.data;
  } catch (error) {
    return error.message;
  }
};

// fetch one tour by id
export const fetchTour = async (id) => {
  try {
    const response = await axios.get(
      `https://africescape-api.onrender.com/api/v1/tours/${id}`
    );
    return response.data.data.data;
  } catch (error) {
    return error.message;
  }
};

export const fetchUser = async (token) => {
  try {
    const response = await axios.get(
      `https://africescape-api.onrender.com/api/v1/users/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
