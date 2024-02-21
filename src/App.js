import "./App.css";
import { TiUser } from "react-icons/ti";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from "react-router-dom";

function App() {

  return (
    <div dir="rtl">
      <div className="bg-[#428adf] min-w-full h-50 py-5 px-7 border-solid border-8 border-[#3180de] rounded-3xl bluePart">
        <div className="flex justify-between text-gray-300">
          <CgMenuBoxed className="text-2xl" />
          <TiUser className="text-2xl" />
        </div>
        <div className="text-white flex justify-between items-center mt-10">
          <h1 className="text-xl font-bold">خوش اومدی!</h1>
          <p className="font-extralight text-sm">افزایش موجودی</p>
        </div>
        <div className="text-white flex justify-between items-center mt-5">
          <p className="font-bold text-base">مریم عزیز</p>
          <div className="flex">
            <h2 className="font-bold text-xl">12,456,000</h2>
            <p className="font-extralight text-sm flex items-center pr-1">
              تومان
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="mt-5 flex w-[80%] justify-between items-center self-center">
          <div className="flex flex-col justify-center items-center self-center h-[92px] w-[48%] bg-white rounded-2xl">
            <img src="images/vector1.png" />
            <h3 className="pt-2">مراقبتی</h3>
          </div>
          <div className="flex flex-col justify-center items-center self-center h-[92px] w-[48%] bg-white rounded-2xl">
            <img src="images/vector2.png" />
            <h3 className="pt-2">خدماتی</h3>
          </div>
        </div>
        <div className="mt-5 flex w-[80%] justify-between items-center self-center">
          <div className="flex flex-col justify-center items-center self-center h-[92px] w-[48%] bg-white rounded-2xl">
            <img src="images/vector3.png" />
            <h3 className="pt-2">پرستاری</h3>
          </div>
          <div className="flex flex-col justify-center items-center self-center h-[92px] w-[48%] bg-white rounded-2xl">
            <img src="images/vector4.png" />
            <h3 className="pt-2">پزشکی</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <div className="flex w-[80%] justify-evenly items-center self-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl py-5 px-5">
          <img src="images/logos.webp" className="w-[30%] h-[70px]" />
          <div className="text-white mr-5">
            <h1 className="font-extrabold text-xl">سلامت اول</h1>
            <p className="font-normal text-xs pt-1">
              اولین سامانه خدمات پرستاری در ایران
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <div className="flex w-[85%] justify-evenly items-center self-center">
          <div className="flex flex-col w-[45%] h-[178px] justify-between">
            <div className="flex w-[100%] py-5 px-2.5 rounded-xl bg-white h-[85px]">
              <img src="/images/icon1.png" />
              <h1 className="pr-1 flex justify-center items-center font-semibold text-sm">
                پرستار سالمند
              </h1>
            </div>
            <div className="flex w-[100%] py-5 px-2.5 rounded-xl bg-white h-[85px]">
              <img src="/images/icon2.png" />
              <h1 className="pr-1 flex justify-center items-center font-semibold text-sm">
                پرستار کودک
              </h1>
            </div>
          </div>
          <div className="w-[45%]  h-[178px]">
            <div className="flex flex-col w-[100%] h-full py-5 px-2.5 rounded-xl bg-white">
              <h1 className="pr-1 font-semibold text-sm mb-1">مشاوره رایگان</h1>
              <p className="text-[10px] text-gray-400 mb-5">
                با ۱۵۲۷ مشاوره رایگان در تمامی ساعات روز از الوپرستار
              </p>
              <img src="/images/icon3.png" className="w-[44px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="mt-10 flex w-[100%] justify-around items-center self-center bg-white rounded-t-xl p-5">
          <div className="flex flex-col justify-center items-center">
            <img src="/images/tabbar1.png" className="w-[24px]" />
            <h5>خانه</h5>
          </div>
          <Link to={"/requests"}>
            <div className="flex flex-col justify-center items-center text-gray-500">
              <img src="/images/tabbar2.png" className="w-[24px]" />
              <h5>درخواست ها</h5>
            </div>
          </Link>
          <div className="flex flex-col justify-center items-center text-gray-500">
            <img src="/images/tabbar3.png" className="w-[24px]" />
            <h5>قرارداد ها</h5>
          </div>
          <div className="flex flex-col justify-center items-center text-gray-500">
            <img src="/images/tabbar4.png" className="w-[24px]" />
            <h5>بیشتر</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
