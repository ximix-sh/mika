import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProgressMobileStepper from "../ProgressMobileStepper";
import "../Header.css";

const Header = ({titleText, LinkTo}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldShowShortDiv, setShouldShowShortDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      setShouldShowShortDiv(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-4 flex flex-col justify-between header-fixed ${
        isScrolled ? "scrolled" : ""
      }`}>

      {shouldShowShortDiv ? (
        <div className="flex justify-between items-center w-[100%]">
          <button className="bg-gray-400 rounded-xl p-1 text-white">
            <Link to={LinkTo}>
              <MdKeyboardArrowRight />
            </Link>
          </button>
          <ProgressMobileStepper />
          <button className="bg-red-800 rounded-xl p-1 text-white">
            <Link to={"/"}>
              <IoClose />
            </Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
          <button className="bg-gray-400 rounded-xl p-1 text-white">
            <Link to={LinkTo}>
              <MdKeyboardArrowRight />
            </Link>
          </button>
          <button className="bg-red-800 rounded-xl p-1 text-white">
            <Link to={"/"}>
              <IoClose />
            </Link>
          </button>
          </div>

          <div dir="rtl" className="p-1 mt-5">
            <div
              className={`flex ${
                isScrolled ? "invisible-on-scroll" : "visible-on-scroll"
              }`}
            >
              <FaRegCircle className="font-black text-xs flex mt-2 ml-1 text-gray-400" />
              <h1 className="flex items-center font-semibold">
                {titleText}
              </h1>
            </div>
            <p
              className={`text-xs text-gray-400 mt-4 mr-1 mb-2 ${
                isScrolled ? "invisible-on-scroll" : "visible-on-scroll"
              }`}
            >
              مرحله 1 از 9
            </p>
            <div className="flex w-[100%]">
              <div className="flex justify-center items-center w-[100%]">
                <ProgressMobileStepper />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
