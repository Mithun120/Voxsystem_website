import React, { useState, useEffect } from "react";
import "../style/loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
};

export default Loader;
