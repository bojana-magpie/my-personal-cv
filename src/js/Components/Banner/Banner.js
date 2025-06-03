import React from "react";
import "./_banner.scss";

import profile from "../../assets/profile.png";

const Banner = () => {
    return (
        <section className="section banner">
            <div className="banner__intro">
                <h1>
                    Hi 👋. <br/>
                    My name is<br/>
                    <span style={{
                        background: 'linear-gradient(90deg, gold 0%, white 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline-block'
                    }}>Bojana.
                    </span><br/>
                    I build things for web.
                </h1>
            </div>
            <div className="banner__image">
                <img src={profile} alt="profile"/>
            </div>
        </section>
    )
}

export default Banner;