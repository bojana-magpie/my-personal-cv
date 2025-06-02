import React from "react";
import { createRoot } from "react-dom/client";
import "./scss/layout/_layout.scss"

import Home from "./js/Pages/Home";
const container = document.getElementById("app");
const root = createRoot(container);

const App = () => { return <Home/> }

root.render(<App/>);
