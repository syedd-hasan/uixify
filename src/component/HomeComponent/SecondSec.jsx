import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import uiUxDesignImg from "../assets/images/ui-ux-design-service.jpg";
import dIllustrationImg from "../assets/images/3d-illustration-service.png";
import logoBranding from "../assets/images/logo-branding-service.jpg";
import uiUxDesignImgHover from "../assets/images/ui-ux-design-service-hover.png";
import dIllustrationImgHover from "../assets/images/3d-illustration-service-hover.png";
import logoBrandingHover from "../assets/images/logo-branding-service-hover.png";
import { GrLinkNext } from "react-icons/gr";

const services = [
  { title: "UI / UX Design", img: uiUxDesignImg, imgHover: uiUxDesignImgHover },
  {
    title: "3D Illustration",
    img: dIllustrationImg,
    imgHover: dIllustrationImgHover,
  },
  { title: "Logo & Branding", img: logoBranding, imgHover: logoBrandingHover },
];

export const SecondSec = () => {
  return (
    <div
      id="services"
      className="relative container md:my-[80px] my-[40px] mx-auto px-4"
    >
      {/* Background Text */}
      <div className="absolute inset-0 top-[20%] flex items-start justify-center pointer-events-none">
        <h2
          className="text-[50px] md:text-[75px] lg:text-[125px] mb-8 font-bold text-[white] opacity-30 leading-[1]"
          style={{ WebkitTextStroke: "2px #b6b1f8" }}
        >
          OUR SERVICES
        </h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <h2 className="text-[25px] md:text-[55px] font-black uppercase text-black col-span-2 leading-normal lg:leading-[40px] mt-2">
          We don't just <span className="text-[#7467fe]">create </span>
          <span className="xl:block hidden">
            <br />
          </span>
          we <span className="text-[#7467fe]">captivate!</span>
        </h2>
        <div>
          <p className="text-[16px] md:text-[20px]">
            "Our mission is to blend creativity with functionality, ensuring
            every design meets the highest standards of user experience."
          </p>
          <button
            className="btn-hover-eft uppercase text-[16px] md:text-[20px] bg-[#c0ff00] hover:scale-105 px-4 py-2 rounded-full flex gap-2 mt-5 border border-black border-b-4 drop-shadow-[0px_1px_4px_black]"
            data-aos="fade-left"
          >
            GET STARTED <BsStars />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-[40px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="second-sec-card-main-div bg-white text-black transition-transform duration-300 ease-in-out transform hover:bg-[#7366fc] hover:text-[#c0ff00] w-full h-full rounded-[30px] p-[20px] drop-shadow-2xl relative"
          >
            <div className="border-b">
              <h3 className="capitalize text-[25px] md:text-[30px] text-center font-bold">
                {service.title}
              </h3>
            </div>
            <div className="flex justify-center items-center mt-4 relative w-full h-[350px]">
              <div className="relative w-full h-full">
                <img
                  alt={service.title}
                  src={service.img}
                  className="second-sec-card-img object-cover w-full h-full rounded-[30px] transition-opacity duration-300"
                />
                <img
                  alt={`${service.title} Hover`}
                  src={service.imgHover}
                  className="second-sec-card-hover-img hidden object-cover w-full h-full rounded-[30px] transition-opacity duration-300"
                />
              </div>
              <div className="hidden second-sec-card-icn-div second-sec-card drop-shadow-[0px_1px_4px_black] rotate-[-20deg] absolute right-[10%] bottom-[8%] bg-[#c0ff00] text-[black] rounded-full flex justify-center items-center">
                <GrLinkNext className="second-sec-card-icn text-[30px] md:text-[40px] m-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
