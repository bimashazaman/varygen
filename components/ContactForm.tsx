"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9z8mcjc",
        "template_4l86jrm",
        formData,
        "IJ05rJVpQfd3Dxv-0"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ name: "", email: "", message: "" });
          alert("Message sent successfully");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <section className="bg-black text-white py-20" id="contact-us">
      <div className="container mx-auto px-4 flex justify-center items-center flex-wrap">
        <div className="lg:w-1/2 md:w-1/2">
          <form onSubmit={handleSubmit} className=" p-8 h-full">
            <h2 className="text-3xl font-bold mb-6">
              Get A Free Marketing Analysis:
            </h2>
            <p className="text-gray-400 mb-6">
              Would you like to know what we could do for you?
            </p>

            <p className="text-gray-400 mb-6">
              Fill out the form and we'll get back to you within 48 hours.
            </p>

            <p className="text-gray-400 mb-6">
              No obligations, no annoying high pressure sales tactics. We won't
              waste your time.
            </p>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent hover:bg-gray-800"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 bg-transparent hover:bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 bg-transparent hover:bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline h-32"
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <br />

            <button
              type="submit"
              className="w-full border-2 border-gray-200 border-2 border-gray-200-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
