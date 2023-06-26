import React from "react";

export const Card = ({ title, text }) => {
  return (
    <div className="max-w-[350px] min-h-[400px] bg-white rounded-3xl drop-shadow-2xl overflow-hidden relative">
      <img className="cursor-pointer" src="/images/gestao.jpg" alt="" />
      <span className="text-indigo-600 p-3">Categoria</span>
      <h4 className="break-words font-bold p-3 cursor-pointer text-ellipsis">
        {title}
      </h4>
      <span className="absolute bottom-4 right-4">01/01/2023</span>
    </div>
  );
};
