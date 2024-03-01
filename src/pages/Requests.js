import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Requests = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div dir="rtl" className="bg-gray-100">
      {/* <div className="p-4 flex justify-between items-center mb-5">
        <button
          onClick={handleBack}
          className="bg-gray-300 rounded-xl p-1 text-white"
        >
          <Link to={"/"}>
            <MdKeyboardArrowRight />
          </Link>
        </button>
        <button className="bg-red-300 rounded-xl p-1 text-white">
          <Link to={"/"}>
            <IoClose />
          </Link>
        </button>
      </div>
      <div dir="rtl" className="p-5">
        <div className="flex">
          <FaRegCircle className="font-black text-xs flex mt-2.5 ml-1 text-gray-400" />
          <h1 className="flex items-center font-semibold">
            مشخصات مورد انتظار از مراقب
          </h1>
        </div>
        <p className="text-xs text-gray-400 mt-6 mb-2">مرحله 1 از 9</p>
        <ProgressMobileStepper />
      </div> */}
      <Header titleText="مشخصات مورد انتظار از مراقب" LinkTo="/"/>

      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-4 flex flex-col px-3 py-7 bg-white rounded-xl">
          <p className=" text-gray-500 mb-5">جنسیت مراقب</p>
          <div className="flex justify-start items-center p-1 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <p className="mr-1 text-gray-600">خانم</p>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-1 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <p className="mr-1 text-gray-600">آقا</p>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-1 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <p className="mr-1 text-gray-600">فرقی ندارد</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-4 flex flex-col px-3 py-7 bg-white rounded-xl">
          <p className=" text-gray-500 mb-5 px-3">انجام امور منزل توسط مراقب</p>
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">خیر,</p>
              <p className="text-gray-600">امور منزل به عهده مراقب نیست.</p>
            </div>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <div className="flex p-1">
              <p className="mr-1 text-gray-900">بله,</p>
              <p className="text-gray-600">امور منزل به عهده مراقب است.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[92%] mt-4 flex flex-col px-3 py-7 bg-white rounded-xl">
          <p className=" text-gray-500 mb-5 px-3">تحصیلات و مدارک مراقب</p>
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <p className="mr-1 text-gray-700">
              مراقب دارای مدرک سالمندیاری میباشد
            </p>
          </div>
          <hr className="text-black text-2xl m-2" />
          <div className="flex justify-start items-center p-2 hover:bg-gray-100 rounded-xl">
            <input type="checkbox" class="ui-checkbox" />
            <p className="mr-1 text-gray-700">مراقب دارای تحصیلات میباشد.</p>
          </div>
        </div>
      </div>
      <Footer to="/MoreInfo" buttonText="مرحله بعد"/>
    </div>
  );
};

export default Requests;
