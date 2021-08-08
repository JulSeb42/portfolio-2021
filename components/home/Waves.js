// Packages
import React from "react"
import styled from "styled-components"

// Variables
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    background-color: ${Variables.Colors.Background};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;

    img {
        position: absolute;
    }
`

const Wave1 = styled.img`
    bottom: 0;
    transform: rotate(180deg);
    min-width: 2000px;
    left: calc(50% - 2000px / 2);
    z-index: -1;
    filter: blur(2px);
`

const Wave2 = styled.img`
    bottom: 0;
    right: 0;
    z-index: 0;
    transform: rotate(180deg);
    opacity: 0.2;
    height: 40vh;
    z-index: -2;
    filter: blur(20px);
`

const Wave3 = styled.img`
    filter: blur(50px);
    top: 100px;
    opacity: 0.8;
    transform: rotate(180deg);
    z-index: 0;
`

const Lines = styled.img`
    z-index: 3;
    width: 100%;
    opacity: 0.5;
`

const Stars = styled.img`
    z-index: 1;
`

const Squares = styled.img`
    width: 400px;
    left: 110px;
    top: 120px;
    opacity: 0.7;
`

const Circles = styled.img`
    right: -120px;
    width: 600px;
    top: 100px;
    opacity: 0.4;
    filter: blur(20px);
`

export default function Waves() {
    return (
        <Container>
            <Wave1 src="/backgrounds/wave-blue.svg" />
            <Wave2 src="/backgrounds/wave-white.svg" />
            <Wave3 src="/backgrounds/wave-orange.svg" />
            <Lines src="/backgrounds/lines.svg" />
            <Stars src="/backgrounds/stars.svg" />
            <Squares src="/backgrounds/squares-2.svg" />
            <Circles src="/backgrounds/Circles.svg" />
        </Container>
    )
}
