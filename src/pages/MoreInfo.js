import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const info = () => {
  return (
    <div dir="rtl">
      <div className="p-4 flex justify-between items-center mb-5">
        <button className="bg-gray-300 rounded-xl p-1 text-white">
          <Link to={"/requests"}><MdKeyboardArrowRight /></Link>
        </button>
        <button className="bg-red-300 rounded-xl p-1 text-white">
          <Link to={"/"}><IoClose /></Link>
        </button>
      </div>
      <div className="p-5">
        <div className="flex">
          <FaRegCircle className="font-black text-xs flex mt-2.5 ml-1 text-gray-400" />
          <h1 className="flex items-center font-semibold">
            مشخصات محل سکونت سالمند
          </h1>
        </div>
        <p className="text-xs text-gray-400 mt-6 mb-2">مرحله 2 از 9</p>
        <svg
          width="372"
          height="5"
          viewBox="0 0 372 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.5"
            x="372"
            y="5"
            width="372"
            height="4.99997"
            rx="2.49999"
            transform="rotate(-180 372 5)"
            fill="#E0E0E1"
          />
          <rect
            opacity="0.5"
            x="372"
            y="5"
            width="82.66"
            height="5"
            rx="2.5"
            transform="rotate(-180 372 5)"
            fill="#428ADF"
          />
        </svg>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-4 flex flex-col px-3 py-7 bg-white rounded-xl">
          <p className=" text-gray-500 mb-5 px-3">ایا سالمند به همراه خانواده زندگی میکند؟</p>
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">خیر,</p>
              <p className="text-gray-600">سالمند تنها است.</p>
            </div>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">بله,</p>
              <p className="text-gray-600">سالمند به همراه خانواده است.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-4 flex flex-col px-3 py-7 bg-white rounded-xl">
          <p className=" text-gray-500 mb-5 px-3">آیا در محل سکونت حیوان خانگی وجود دارد؟</p>
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">خیر,</p>
              <p className="text-gray-600">سالمند حیوان خانگی ندارد.</p>
            </div>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">بله,</p>
              <p className="text-gray-600">سالمند حیوان خانگی دارد</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-24 flex justify-center items-center">
        <div className="w-[100%]  flex flex-col px-3 py-5 bg-white rounded-xl">
          <button className="bg-blue-600 text-white rounded-xl py-4 hover:bg-blue-800">
            <Link to={"/"}>مرحله بعد</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default info;
