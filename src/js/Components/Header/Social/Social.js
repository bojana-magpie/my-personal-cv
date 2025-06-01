import React from "react";
import "./_social.scss";

const Social = (props) => {
    return (
        <div className="header__social--icons">
            {props.items.map((item, i) => (
                <a key={i} href={item.url} target="_blank">
                    <img  src={item.src} className="social--icons--icon" alt="social"/>
                </a>
            ))}
        </div>
    )
}

export default Social;