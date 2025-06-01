import React from "react";
import "./_logo.scss";
import logo from "../../../assets/logo.svg";

const Logo = () => {
    return (
        <div className="header__logo">
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;