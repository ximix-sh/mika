import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProgressMobileStepper from '../ProgressMobileStepper';
import Footer from "./Footer";
import Header from "./Header";

const info = () => {
  return (
    <div dir="rtl">
      <Header titleText="مشخصات محل سکونت سالمند" LinkTo="/Requests"/>
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
      <Footer to="/" buttonText="مرحله بعد"/>
    </div>
  );
};

export default info;
