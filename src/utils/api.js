import axios from "axios";
import Config from "./config";

const baseUrl = Config.baseUrl;
const userUrl = Config.userUrl;
const bookUrl = Config.baseUrl;

// get all books
export const fetchTours = () =>
  axios.get(baseUrl).then((response) => response.data.data.data);

// fetch one tour by id
export const fetchTour = (id) =>
  axios.get(`${baseUrl}/${id}`).then((response) => response.data.data.data);

// make review
export const makeReview = (tourId, reviewText, rating, token) =>
  axios.post(
    `${baseUrl}/${tourId}/reviews`,
    { review: reviewText, rating },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

// login user
export const logIn = async (email, password) =>
  await axios.post(`${userUrl}/login`, { email, password });

// signup user
export const signUp = async (name, email, password, passwordConfirm) =>
  await axios.post(`${userUrl}/signup`, {
    name,
    email,
    password,
    passwordConfirm,
  });

// fetch one user profile
export const updateMe = async (formData, token) =>
  await axios({
    method: "PATCH",
    url: `${userUrl}/updateMe`,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

// book tour
export const bookTour = (id, token) =>
  axios
    .post(
      `${bookUrl}/${id}/myBooking`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => response.data);

export const fetchUser = async (token) => {
  try {
    const response = await axios.get(`${userUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMyBooking = async (token) => {
  try {
    const response = await axios.get(`${bookUrl}/myBooking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const cancelBooking = async (token, bookingId) => {
  try {
    const response = await axios.delete(`${bookUrl}/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return "success";
  } catch (error) {
    return error.message;
  }
};

export const fetchUserReviews = async (token) => {
  try {
    const response = await axios.get(`${userUrl}/reviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.message;
  }
};
