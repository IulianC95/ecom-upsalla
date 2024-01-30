'use client'

import { useState,useEffect } from "react";

import { IoIosArrowDropup } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop}>
        <IoIosArrowDropup
          size={40}
          className="cursor-pointer transition-colors hover:text-amber-600"
        >
          {" "}
        </IoIosArrowDropup>
      </button>
    )
  );
};

export default BackToTop;
