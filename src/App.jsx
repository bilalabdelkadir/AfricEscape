import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { TourProvider } from "./context/TourContext";
import TourPage from "./pages/TourPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Licensing from "./pages/licensing";

function App() {
  return (
    <TourProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/tours/:slug/:id" element={<TourPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </TourProvider>
  );
}

export default App;
