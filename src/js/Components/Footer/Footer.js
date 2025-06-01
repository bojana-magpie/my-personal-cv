import React from "react";
import "./_footer.scss";
import Logo from "../Header/Logo/Logo";
import Menu from "../Header/Menu/Menu";
import Social from "../Header/Social/Social";

import github from "../../assets/gith.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
    return (
        <>
            <footer className="header footer__top" id="contact">
                <Logo/>
                <Menu items={
                    [
                        { title: "+386 40 588 849",  url: "tel:+386 40 588 849" },
                        {
                            title: "bojana.magpie@gmail.com",
                            url: "mailto:bojana.magpie@gmail.com" // Remove subject/body temporarily
                        }
                    ]
                }/>
                <Social
                    items={
                        [
                            { url: "https://github.com/bojana-magpie",  src: github},
                            { url: "https://www.linkedin.com/in/bojana-strachkovski-789958297/",  src: linkedin},

                        ]
                    }
                />
            </footer>
            <div className="footer__bottom">
                <Menu items={
                    [
                        { title: "Home",  url: "#top" },
                        { title: "Tech Stack",  url: "#stack" },
                        { title: "Projects",  url: "#projects" },
                        { title: "Contact",  url: "#contact" },
                    ]
                }/>
                <p>Built by <span style={{
                    background: 'linear-gradient(90deg, gold 0%, deeppink 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                }}>Bojana.
                    </span> </p>
            </div>
        </>
    )
}

export default Footer;