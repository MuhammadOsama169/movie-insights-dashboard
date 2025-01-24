import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="relative">
      <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
