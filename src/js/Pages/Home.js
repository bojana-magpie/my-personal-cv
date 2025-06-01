import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Section from "../Components/Section/Section";
import Footer from "../Components/Footer/Footer";
import Social from "../Components/Header/Social/Social";

import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import saas from "../assets/saas.svg";
import vscode from "../assets/vscode.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg"
import Projects from "../Components/Projects/Projects";

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <Section id="stack" class="tech" heading="My Tech Stack" subtitle="Technologies I've been working with recently">
                <Social
                    items={
                        [
                            { url: "#",  src: html},
                            { url: "#",  src: css},
                            { url: "#",  src: js},
                            { url: "#",  src: react},
                            { url: "#",  src: saas},
                            { url: "#",  src: vscode},
                            { url: "#",  src: git},
                            { url: "#",  src: github},

                        ]
                    }
                />
            </Section>
            <Section id="projects" class="projects" heading="Projects" subtitle="Things I've built so far">
                <Projects/>
            </Section>
            <Footer/>
        </>

    )
}

export default Home;