import React from "react";
import cheerLogo from "../assets/images/cheerful.png";
import bgImg from "../assets/images/HEROPAGE.png";

export const Footer = () => {
  return (
    <>
      <div
        className="bg-[#7366fc] pt-4 md:pt-10 overflow-hidden"
        style={{
          background: `url(${bgImg})`,
          backgroundRepeat: "round",
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex justify-center md:justify-between h-full"
          style={{
            background: `url(${cheerLogo}) repeat`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-grow h-[100px]"></div>
          <div></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">
                Get in touch
              </h4>
              <div>
                <h6 className="text-white text-[15px] mb-1">
                  123 Tech Avenue, Innovation City, TX 75001
                </h6>
                <h6 className="text-white text-[15px] mb-1">info@uixify.com</h6>
                <h6 className="text-white text-[15px] mb-1">
                  +1(123) 4546-7890
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">
                Special Link
              </h4>
              <div>
                {["Home", "Service", "Our Work", "Testimonial"].map(
                  (item, index) => (
                    <h6 key={index} className="text-white text-[15px] mb-1">
                      {item}
                    </h6>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-semibold text-[20px]">Company</h4>
              <div>
                {["Sign Up", "Contact", "Office Map", "FAQs"].map(
                  (item, index) => (
                    <h6 key={index} className="text-white text-[15px] mb-1">
                      {item}
                    </h6>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <h2
          className="text-center text-[50px] md:text-[85px] lg:text-[250px] text-transparent leading-[0.4] mt-10 md:mt-14 tracking-wide font-black"
          style={{ WebkitTextStroke: "2px #ffff" }}
        >
          CRE
          <span
            className="text-[#c0ff00] font-black"
            style={{ WebkitTextStroke: "0px #ffff" }}
          >
            AT
          </span>
          IVE
        </h2>
      </div>
    </>
  );
};
