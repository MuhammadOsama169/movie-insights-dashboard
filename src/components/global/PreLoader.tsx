import React from "react";
import logo from "@/assets/icons/logo.svg";
import { LoadingSpinner } from "./LoadingSpinner";

export const PreLoader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="Loading" className="w-20 h-20" loading="lazy" />

      <div className="w-24 my-4">
        <LoadingSpinner size="100px" />
      </div>
      <p className="text-white font-bold text-2xl tablet:text-xl mobile:text-lg">
        Loading...
      </p>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </div>
  );
};
