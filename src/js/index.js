import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

let counter = 0;  

// Renderiza la aplicación
setInterval (() => {
    counter ++;
    ReactDOM.createRoot(document.getElementById("app")).render(<Home counter={counter}/>);
},1000);


