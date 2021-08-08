// Packages
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    opacity: 0;
    transform: translateX(-${Variables.Margins.S});
    visibility: hidden;
    transition: ${Variables.Transitions.Fade};
    will-change: opacity, visibility;

    &.Visible {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
    }
`

export default function Fade(props) {
    const [isVisible, setIsVisible] = useState(true)
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        // return() => observer.unobserve(domRef.current)
    }, [])

    return (
        <Container className={isVisible ? "Visible" : ""} ref={domRef}>
            {props.children}
        </Container>
    )
}
