import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://example.com/send-email", {
        to: "test@gmail.com",
        subject: "New message from contact form",
        body: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      });
      setIsSent(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="my-10 md:my-20 lg:my-28 flex flex-col max-w-5xl mx-auto items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-sm md:text-lg mb-8 w-1/2 text-center text-gray-500">
          please if you have any question feel free to messegae us we will
          respond as soon as possible
        </p>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              placeholder="Enter your message here"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          {isSent ? (
            <p className="text-green-500 mb-6">Message sent successfully!</p>
          ) : (
            <button
              className="bg-primary hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded"
              type="submit"
            >
              {" "}
              Send{" "}
            </button>
          )}{" "}
        </form>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
};

export default ContactUs;
