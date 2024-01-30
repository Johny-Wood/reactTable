import React from "react";
import "./index.scss";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
