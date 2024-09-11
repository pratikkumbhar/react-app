import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="w-full h-screen ">
      <section className="w-full h-screen flex items-center justify-center border">
        <div className="w-[350px] h-[500px]   bg-red-300 py-12 px-10 rounded-md shadow-2xl  ">
          <form className="flex flex-col justify-center items-center ">
            <h1 className="text-red-600 mb-6 text-3xl font-bold">
              Create Account
            </h1>
            <div className=" flex flex-col ">
              <lable
                id="lable1"
                for="input"
                className="  text-red-600 text-lg font-semibold ">
                Name
              </lable>
              <input
                id="input1"
                className=" h-10  rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold outline-none hover:w-[105%] hover:h-[44px] duration-200 mb-6 hover:mb-5"
                type="text"
              />
            </div>{" "}
            <div className="flex flex-col ">
              <lable
                className="text-red-600  text-lg font-semibold"
                id="lable2">
                Email
              </lable>
              <input
                className="h-10  rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold  outline-none hover:w-[105%] hover:h-[44px] duration-200 mb-6 hover:mb-5"
                type="email"
                id="input2"
              />
            </div>{" "}
            <div className="flex flex-col ">
              <lable
                className="text-red-600  text-lg font-semibold"
                id="lable3">
                Password
              </lable>
              <input
                className="h-10  rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold  outline-none hover:w-[105%] hover:h-[44px] duration-200 mb-6 hover:mb-5"
                type="password"
                id="input3"
              />
            </div>
            <input
              type="submit"
              className="bg-gradient-to-tr hover:bg-gradient-to-tl from-red-600 via-red-500 to-red-600  px-7 py-2 rounded-md font-extrabold text-red-50 hover:scale-95 ease-in-out transition-transform duration-100 mt-5"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
