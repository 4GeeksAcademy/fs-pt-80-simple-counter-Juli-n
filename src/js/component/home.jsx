import React from "react";
import { Contador } from "./contador";

const Home = ({ counter }) => {
  const formatDigits = (counter) => {
    return String(counter).padStart(6, "0").split("").map(Number);
  };

  const digitsArray = formatDigits(counter);

  return (
    <div className="contador-container text-center">
      <Contador digitos={<i className="fa-solid fa-clock"></i>} />
      {digitsArray.map((digit, index) => (
        <Contador key={index} digitos={digit} />
      ))}
    </div>
  );
};

export default Home;