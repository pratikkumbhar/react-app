import React from "react";

export default function App() {
  return (
    <div className="w-full h-screen">
      <section className="w-full h-screen flex items-center justify-center border">
        <div className="max-w-[800px]  bg-red-300 py-12 px-10 rounded-md">
          <form className="">
            <h1 className="text-red-600 mb-6 text-3xl font-bold">
              Create
              Account
            </h1>
            <div className="flex flex-col mb-5">
              <lable className="text-red-600 text-lg font-bold">
                Name
              </lable>
              <input
                className="rounded px-2 py-1 text-lg text-semibold text-red-600 font-semibold outline-none"
                type="text"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <lable className="text-red-600  text-lg font-bold">
                Email
              </lable>
              <input
                className="rounded px-2 py-1 text-lg text-semibold text-red-600 font-semibold  outline-none"
                type="email"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <lable className="text-red-600  text-lg font-bold">
                Password
              </lable>
              <input
                className="rounded px-2 py-1 text-lg text-semibold text-red-600 font-semibold  outline-none"
                type="password"
              />
            </div>
            <input
              type="submit"
              className="bg-red-600 px-7 py-2 rounded-md font-extrabold text-white hover:scale-105 ease-in-out"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
