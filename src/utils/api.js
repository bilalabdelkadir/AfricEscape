import axios from "axios";

export const fetchTours = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:3000/api/v1/tours");
    return response.data.data.data;
  } catch (error) {
    return error.message;
  }
};

// fetch one tour by id
export const fetchTour = async (id) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:3000/api/v1/tours/${id}`
    );
    return response.data.data.data;
  } catch (error) {
    return error.message;
  }
};
