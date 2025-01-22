import React from "react";
import logo from "@/assets/icons/logo.svg";

export const PreLoader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="Loading" className="w-20 h-20" loading="lazy" />

      <div className="w-24 my-4">
        <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-purple-700 animate-progress" />
        </div>
      </div>

      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  );
};
