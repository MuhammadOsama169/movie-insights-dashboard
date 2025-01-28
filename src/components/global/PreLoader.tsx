import React from "react";
import logo from "@/assets/images/login-background.jpg";

export const PreLoader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="Loading" className="w-[500px]" loading="lazy" />

      <div className="w-24 my-4 flex">
        <span className="text-white font-bold text-3xl tablet:text-xl mobile:text-lg animate-bounce">
          Loading...
        </span>
      </div>
    </div>
  );
};
