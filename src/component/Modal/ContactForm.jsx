import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "",
    service: "",
    message: "",
  });

  const formRef = useRef(); // Create a ref for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS setup
    emailjs
      .send(
        "service_5jfcbqu",
        "template_x8ov0ul",
        formData,
        "1twDpMDkAb0o2KizL"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        onClose(); // Close modal after submission
        // Reset form data
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interestedIn: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILEDinggg...", err);
      });
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside the form
    if (formRef.current && !formRef.current.contains(e.target)) {
      onClose(); // Close the form
    }
  };

  React.useEffect(() => {
    // Add event listener to handle clicks outside the form
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isOpen && (
      <div className="fixed contact-form-main-div inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div
          ref={formRef}
          className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full"
        >
          <h2 className="text-[30px] md:text-[40px] uppercase font-bold text-[#7366fc]">
            Get Started Today!
          </h2>
          <p className="font-semibold pb-2 capitalize">
            Let’s start a project together
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 font-medium">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            />
            <input
              type="text"
              name="interestedIn"
              placeholder="Interested In*"
              value={formData.interestedIn}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            >
              <option value="" disabled>
                Select Service*
              </option>
              <option value="UI UX Design">UI UX Design</option>
              <option value="3D Illustration">3D Illustration</option>
              <option value="Logo & Branding">Logo & Branding</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border p-2 md:p-3 bg-white rounded"
            />
            <div className="flex justify-between w-full">
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#7366fc] text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ContactForm;
