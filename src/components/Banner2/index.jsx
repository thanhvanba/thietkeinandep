import React from "react";

export default function Banner2({ titleArray = [], image, position }) {
  console.log(titleArray);
  return (
    <div className="h-screen w-full relative bg-gray-100 flex flex-col">
      <div
        className={`w-full flex-grow ${image} bg-cover bg-no-repeat bg-center pl-60`}
        style={{ backgroundPosition: `${position}`}}
      >
        <div className="h-screen pl-100 flex justify-start items-center">
          <div>
            <p className="">
              {titleArray.map((text, index) => (
                <a
                  key={index}
                  className="font-corinthia text-[25pt] text-black font-bold"
                >
                  <br />
                  {text}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
