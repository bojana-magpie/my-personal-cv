import React from "react";
import "./_header.scss";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Social from "./Social/Social";

import github from "../../assets/gith.svg";
import linkedin from "../../assets/linkedin.svg";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__left">
                    <Logo/>
                </div>
                <div className="header__right">
                    <Menu items={[
                        {title: "Home", url: "#top"},
                        {title: "Tech Stack", url: "#stack"},
                        {title: "Projects", url: "#projects"},
                        {title: "Contact", url: "#contact"},
                    ]}/>
                    <Social items={[
                        {url: "https://github.com/bojana-magpie", src: github},
                        {url: "https://www.linkedin.com/in/bojana-strachkovski-789958297/", src: linkedin},
                    ]}/>
                </div>
            </header>

        </>

    )
}

export default Header;