import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
import "./scss/layout/_layout.scss";

import Home from "./js/Pages/Home";
const App = () => { return <Home/> }

root.render(<App/>);
