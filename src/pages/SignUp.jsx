import React, { useState, useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const SignUp = () => {
  const { authState, signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const { loading, error } = authState;

  // if isLogged is true redirect user to home page
  const navigate = useNavigate();
  useEffect(() => {
    // Navigation fixed
    if (authState.token) {
      navigate("/");
    }
  }, [authState]);

  return (
    <div className="bg-gray-200">
      <NavBar />
      {/* class are converted to react friendly syntax className.. and for to htmlFor */}
      <div className="relative text-primary py-28">
        <div className="flex items-center justify-center my-4">
          <div className="new-shadow">
            <div className="flex items-center justify-center px-4 py-4 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-8">
              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight  sm:text-4xl">
                  Sign Up
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Already have an account?
                  <a
                    href="/login"
                    title=""
                    className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                  >
                    Sign In
                  </a>
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signup(name, email, password, passwordConfirm);
                  }}
                  className="mt-8"
                >
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                          type="email"
                          placeholder="Enter Your Email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                          type="password"
                          placeholder="Enter Your Password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                          type="password"
                          placeholder="Enter Your Password"
                          id="password"
                          value={passwordConfirm}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                        {loading ? (
                          <Spinner />
                        ) : (
                          <span className="text-gray-100">Signup</span>
                        )}
                      </button>
                    </div>
                    {/* if error error message */}
                    {error && (
                      <p className="text-red-500 text-sm font-medium"> {error} </p>
                    )}
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <p>
                    <span className="text-gray-500  text-sm">
                      Read our
                      <span className="capitalize text-indigo-600">
                        privacy policy
                      </span>
                      and
                      <span className="capitalize text-indigo-600">
                        terms of service
                      </span>
                      to learn more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
