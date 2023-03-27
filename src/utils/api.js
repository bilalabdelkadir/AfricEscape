import axios from "axios";
const baseUrl = "https://africescape-api.onrender.com/api/v1/tours"
const bookUrl = "https://africescape-api.onrender.com/api/v1/bookings"
const userUrl = "https://africescape-api.onrender.com/api/v1/users"


// get all books
export const fetchTours = () =>
    axios.get(baseUrl).then(response => response.data.data.data)

// fetch one tour by id
export const fetchTour = (id) => 
      axios.get(`${baseUrl}/${id}`).then(response => response.data.data.data)

// fetch one tour by id
export const logIn = (email, password) => 
    axios.post(`${userUrl}/login`, {email, password} )

// fetch one tour by id
export const signUp = (name, email, password, passwordConfirm) => 
    axios.post(`${userUrl}/signup`, { name, email, password, passwordConfirm } )

// book tour
export const bookTour = (id, token) => 
      axios.post(`${bookUrl}/${id}/myBooking`, {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      ).then(response => response.data)

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

export const fetchMyBooking = async (token) => {
  try {
    const response = await axios.get(
      `https://africescape-api.onrender.com/api/v1/bookings/myBooking`,
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

export const cancelBooking = async (token, bookingId) => {
  try {
    const response = await axios.delete(
      `https://africescape-api.onrender.com/api/v1/bookings/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "success";
  } catch (error) {
    return error.message;
  }
};

export const fetchUserReviews = async (token) => {
  try {
    const response = await axios.get(
      `https://africescape-api.onrender.com/api/v1/users/reviews`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.message;
  }
};
