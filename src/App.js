import React from "react";
import "./App.css"
export default function App() {
  return (
    <div className="w-full h-screen ">
      <section className="w-full h-screen flex items-center justify-center border">
        <div className="w-[350px]   bg-red-300 py-12 px-10 rounded-md shadow-2xl  ">
          <form className="flex flex-col justify-center items-center">
            <h1 className="text-red-600 mb-6 text-3xl font-bold">
              Create
              Account
            </h1>
            <div className="flex flex-col mb-5">
              <lable className="text-red-600 text-lg font-semibold " id="lable1">
                Name
              </lable>
              <input
               id="input1" className="h-10 focus:w-[103%] focus:h-11 hover:w-[103%] hover:h-11 rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold outline-none"
                type="text"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <lable className="text-red-600  text-lg font-semibold">
                Email
              </lable>
              <input
                className="rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold  outline-none"
                type="email"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <lable className="text-red-600  text-lg font-semibold">
                Password
              </lable>
              <input
                className="rounded px-2 py-1 text-lg text-semibold bg-red-50 text-red-600 font-semibold  outline-none"
                type="password"
              />
            </div>
            <input
              type="submit"
              className="bg-gradient-to-tr hover:bg-gradient-to-tl from-red-600 via-red-500 to-red-600  px-7 py-2 rounded-md font-extrabold text-red-50 hover:scale-95 ease-in-out transition-transform duration-100"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
