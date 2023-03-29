const BACKEND_URI = 'https://africescape-api.onrender.com'
// const BACKEND_URI = 'http://localhost:5000'

const baseUrl = `${BACKEND_URI}/api/v1/tours`
const bookUrl = `${BACKEND_URI}/api/v1/bookings`
const userUrl = `${BACKEND_URI}/api/v1/users`
const userPic = `${BACKEND_URI}/img/users`

const Config = {baseUrl, bookUrl, userUrl, userPic}

export default Config