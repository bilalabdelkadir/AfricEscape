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
  const { loading, error, isLogged } = authState;

  // if isLogged is true redirect user to home page
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return (
    <div className="bg-gray-200">
      <NavBar />
      <div class="relative text-primary py-28">
        <div class="flex items-center justify-center my-4">
          <div class="new-shadow">
            <div class="flex items-center justify-center px-4 py-4 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-8">
              <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight  sm:text-4xl">
                  Sign Up
                </h2>
                <p class="mt-2 text-base text-gray-600">
                  Already have an account?
                  <a
                    href="/login"
                    title=""
                    class="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                  >
                    Sign In
                  </a>
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    signup(name, email, password, passwordConfirm);
                  }}
                  class="mt-8"
                >
                  <div class="space-y-5">
                    <div>
                      <label
                        for="name"
                        class="text-base font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <div class="mt-2.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
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
                        for="email"
                        class="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div class="mt-2.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
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
                        for="password"
                        class="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div class="mt-2.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
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
                        for="password"
                        class="text-base font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div class="mt-2.5">
                        <input
                          class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                          type="password"
                          placeholder="Enter Your Password"
                          id="password"
                          value={passwordConfirm}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <button class="w-full inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                        {loading ? (
                          <Spinner />
                        ) : (
                          <span className="text-gray-100">Signup</span>
                        )}
                      </button>
                    </div>
                    {/* if error error message */}
                    {error && (
                      <p class="text-red-500 text-sm font-medium"> {error} </p>
                    )}
                  </div>
                </form>
                <div class="mt-3 space-y-3">
                  <p>
                    <span class="text-gray-500  text-sm">
                      Read our
                      <span class="capitalize text-indigo-600">
                        privacy policy
                      </span>
                      and
                      <span class="capitalize text-indigo-600">
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
