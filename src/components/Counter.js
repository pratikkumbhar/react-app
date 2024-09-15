import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-full h-screen ">
      <div className="container w-[500px] h-[400px] bg-green-300 m-auto mt-10 rounded-xl px-10 py-20 flex flex-col gap-10 justify-start items-center">
        <h1 className="bg-green-700 text-white font-extrabold text-5xl text-center rounded px-4 py-2">
          {counter}
        </h1>
        <div className="flex gap-5">
          <button
            className="bg-green-700 text-white font-extrabold text-2xl text-center rounded px-4 py-2"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </button>
          <button
            className="bg-red-700 text-white font-extrabold text-2xl text-center rounded px-4 py-2"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </button>
        </div>
        <button
          className="bg-white text-green-800 border-green-600 border-2 font-extrabold text-2xl text-center rounded px-4 py-2"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
