// src/pages/ApplyForm.jsx
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
// import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideUpVariants } from "../sections/animation.js";

const ApplyForm = () => {
  const form = useRef();
  const { position } = useParams();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Application sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send application. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lg:w-[60%] w-[90%] m-auto py-[60px] text-white">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="text-4xl font-bold text-yellow-400 mb-8 text-center uppercase"
      >
        Apply for {position}
      </motion.h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 bg-gray-900 p-8 rounded-lg shadow-md border border-gray-700"
      >
        <div>
          <label className="block mb-2 text-gray-300">Full Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Email Address</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Phone Number</label>
          <input
            type="text"
            name="user_phone"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Position Applied For</label>
          <input
            type="text"
            name="user_position"
            readOnly
            value={position}
            className="w-full p-3 rounded-md bg-gray-800 text-yellow-400 font-semibold"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Upload Resume</label>
          <input
            type="file"
            name="user_cv"
            accept=".pdf,.doc,.docx"
            required
            className="w-full text-gray-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-300">Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-yellow-500 hover:bg-white text-black font-bold py-3 rounded-md transition"
        >
          Submit Application
        </motion.button>
      </form>
    </div>
  );
};

export default ApplyForm;
