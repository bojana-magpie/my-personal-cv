import React from "react";
import "./_section.scss";


const Section = (props) => {
    return (
        <section className={"section " + props.class} id={props.id}>
            <h2 className="section__title">{props.heading}</h2>
            <p className="section__subtitle">{props.subtitle}</p>
            {props.children}
        </section>
    )
}

export default Section;