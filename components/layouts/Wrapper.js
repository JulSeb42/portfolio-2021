// Packages
import React from "react"

// Components
import AppHead from "../AppHead"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import GlobalStyles from "../styles/GlobalStyles"

export default function Wrapper(props) {
    return (
        <>
            <GlobalStyles />
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />
            <Header />
            {props.children}

            <Footer />
        </>
    )
}
