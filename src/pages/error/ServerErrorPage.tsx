import serverErrorIcon from "@/assets/images/server-error.png";
import React from "react";

export const ServerErrorPage = () => {
  return (
    <div className=" h-screen bg-[#08080a] text-white flex flex-col md:flex-row justify-center items-center p-6">
      <img
        src={serverErrorIcon}
        alt="Server Error"
        className="w-40 h-40 md:w-60 md:h-60 mb-6 md:mb-0 md:mr-12"
      />

      <div className="text-center md:text-left max-w-md">
        <h1 className="text-3xl font-bold text-primary mb-4">Server Error</h1>
        <p className="text-lg mb-6">
          There was an error while fetching the data. Please try again or
          contact the developer if the issue continues
        </p>
        <button
          className="border border-white font-bold text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          onClick={() => window.location.reload()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
