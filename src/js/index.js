import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Home counter={counter} />;
};

// Renderiza la aplicación
ReactDOM.createRoot(document.getElementById("app")).render(<App />);

