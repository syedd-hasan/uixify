import React, { useState, useRef } from "react";
import bgImg from "../assets/images/HEROPAGE.png";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // Import the CSS file
import contacImg from "../assets/images/contact-img.png";
import { BsStars } from "react-icons/bs";

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
      <div className="fixed contact-form-main-div inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
        <div
          ref={formRef}
          className="bg-white  rounded-[40px] shadow-lg max-w-4xl w-full md:mt-5"
        >
          <div className="md:grid grid-cols-2 gap-4">
            <div
              className="hidden  bg-[#7366fc] pt-10 h-full md:flex flex-col justify-between  rounded-l-[40px]"
              style={{
                background: `url(${bgImg})`,
                backgroundRepeat: "round",
                backgroundSize: "cover",
              }}
            >
              <div className=" px-8">
                <h2 className="text-[30px] md:text-[30px] leading-[35px] font-bold text-[#C0FF00]">
                  Let's Start a Project Together
                </h2>
                <p className="text-white">
                  We'll contact you within a couple of hours to schedule a
                  meeting to discuss your goals.
                </p>
              </div>
              <img src={contacImg} className="object-cover h-full w-auto" />
            </div>
            <div className=" pb-8 pt-10 pl-2 pr-8">
              <h2 className="text-[30px] md:text-[30px] uppercase font-bold text-[#7366fc]">
                Get Started Today!
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 font-medium">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4   bg-white rounded-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4   bg-white rounded-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4   bg-white rounded-full"
                />
                <input
                  type="text"
                  name="interestedIn"
                  placeholder="Interested In*"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4   bg-white rounded-full"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4  bg-white rounded-full"
                >
                  <option value="" disabled>
                    Select Service*
                  </option>
                  <option value="UI UX Design">UI UX Design</option>
                  <option value="3D Illustration">Animation</option>
                  <option value="Logo & Branding">Logo & Branding</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border py-2 px-4   bg-white rounded-full"
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
                    className=" font-medium btn-hover-eft transition-transform duration-300 ease-in-out drop-shadow-[0px_0px_3px_#808080] uppercase bg-[#c0ff00] hover:scale-105 px-4 py-2 rounded-full flex gap-2  border border-black border-b-4 z-50"
                  >
                    Submit <BsStars />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ContactForm;
