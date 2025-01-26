import React from "react";

interface LoadingSpinnerProps {
  size?: string;
}
export const LoadingSpinner = ({ size = "60px" }: LoadingSpinnerProps) => {
  return (
    <div className="relative">
      <div
        style={{ width: size, height: size }}
        className={` border-4  border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};
