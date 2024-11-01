// import React, { useState, useEffect } from "react";
// import Logo from "../assets/logos/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";

// const navigation = [
//   { name: "About", to: "about" },
//   { name: "Service", to: "services" },
//   { name: "Projects", to: "blogs" },
//   { name: "Blogs", to: "projects" },
//   { name: "Testimonials", to: "testimonials" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [headerVisible, setHeaderVisible] = useState(true);
//   let lastScrollY = window.scrollY;

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };
//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY) {
//       setHeaderVisible(false); // Scrolling down
//     } else {
//       setHeaderVisible(true); // Scrolling up
//     }
//     lastScrollY = window.scrollY;
//   };

//   // Debouncing the scroll event
//   let isScrolling;
//   const debouncedScroll = () => {
//     clearTimeout(isScrolling);
//     isScrolling = setTimeout(() => handleScroll(), 100);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", debouncedScroll);
//     return () => {
//       window.removeEventListener("scroll", debouncedScroll);
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className={`bg-[#7366fc] fixed w-full transition-transform duration-300 ${
//         headerVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//       style={{ top: 0, zIndex: 1000 }} // Added zIndex
//     >
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img alt="Your Company" src={Logo} className="h-8 w-auto" />
//             </div>
//           </div>
//           <div className="hidden sm:block flex space-x-4">
//             {navigation.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.to)}
//                 className={classNames(
//                   "text-gray-300 hover:bg-[#c0ff00] hover:text-black",
//                   "rounded-md px-3 py-2 text-sm font-medium uppercase"
//                 )}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
//           <div className="hidden sm:ml-6 sm:block">
//             <div className="flex space-x-4">
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:bg-[#c0ff00] hover:text-black hover:border-none focus:outline-none bg-transparent border border-white px-3"
//                 onClick={() => alert("Start a Project")}
//               >
//                 <span className="text-[white] hover:text-black uppercase">
//                   Start a Project
//                 </span>
//               </button>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <FaTimes className="h-6 w-6 text-white" />
//               ) : (
//                 <FaBars className="h-6 w-6 text-white" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="sm:hidden bg-[#7366fc] text-white">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => {
//                   scrollToSection(item.to);
//                   setMobileMenuOpen(false);
//                 }}
//                 className={classNames(
//                   "text-gray-300 hover:bg-gray-700 hover:text-white",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </button>
//             ))}
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:bg-[#c0ff00] hover:text-black focus:outline-none border border-white"
//               onClick={() => alert("Start a Project")}
//             >
//               <span className="text-white uppercase">Start a Project</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import Logo from "../assets/logos/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactForm from "../Modal/ContactForm"; // Import the modal component

const navigation = [
  { name: "Service", to: "services" },
  { name: "About", to: "projects" },
  { name: "Projects", to: "blogs" },
  // { name: "Blogs", to: "projects" },
  { name: "Testimonials", to: "testimonials" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setHeaderVisible(false); // Scrolling down
    } else {
      setHeaderVisible(true); // Scrolling up
    }
    lastScrollY = window.scrollY;
  };

  // Debouncing the scroll event
  let isScrolling;
  const debouncedScroll = () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => handleScroll(), 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <nav
        className={`bg-[#7366fc] fixed w-full transition-transform duration-300 ${
          headerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: 0, zIndex: 1000 }} // Added zIndex
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img alt="Your Company" src={Logo} className="h-8 w-auto" />
              </div>
            </div>
            <div className="hidden sm:block flex space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.to)}
                  className={classNames(
                    "text-gray-300 hover:bg-[#c0ff00] hover:text-black",
                    "rounded-md px-3 py-2 text-sm font-medium uppercase"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:bg-[#c0ff00]  hover:text-black hover:border-none focus:outline-none bg-transparent border border-white px-3"
                  onClick={() => setModalOpen(true)}
                >
                  <span className="text-[white] font-medium hover:text-black uppercase">
                    Get a Quote
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <FaTimes className="h-6 w-6 text-white" />
                ) : (
                  <FaBars className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#7366fc] text-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.to);
                    setMobileMenuOpen(false);
                  }}
                  className={classNames(
                    "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <button
                type="button"
                className="relative rounded-full bg-transparent p-1 text-gray-400 hover:bg-[#c0ff00] hover:text-black focus:outline-none border border-white"
                onClick={() => setModalOpen(true)} // Open modal on click
              >
                <span className="text-white uppercase">Get a Quote</span>
              </button>
            </div>
          </div>
        )}

        {/* Render the ContactForm */}
      </nav>
      <ContactForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
