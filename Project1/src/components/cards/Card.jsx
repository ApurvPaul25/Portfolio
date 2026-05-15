import React from "react";

export default function Card({ srcimg, title, description, textColor }) {
  return (
<div
  className={`rounded-b-4xl max-w-[20rem] border-2 border-transparent backdrop-blur-sm
  bg-white/70 shadow-sm px-4 pt-4 flex flex-col h-auto
  hover:bg-gray-50 hover:border-gray-50 hover:shadow-lg hover:border-[8px]
  transition w-full sm:w-[48%] lg:w-[18%] ${textColor}`}
>

       {srcimg && <img className="rounded-t-4xl" src={srcimg} alt={title} />} 
      <h1 className="pt-2 pb-1 text-xl font-semibold text-left">{title}</h1>
      <p className="pb-10 text-sm text-gray-700">{description}</p>
    </div>
  );
}
