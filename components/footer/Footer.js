// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Social from "./Social"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.footer`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${Variables.Margins.M} 5vw;
    background-color: ${Variables.Colors.White20};
    backdrop-filter: blur(20px);

    @media ${Variables.Breakpoints.Tablet} {
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const Copy = styled.p`
    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Medium};
    font-size: ${Variables.FontSizes.Nav};

    @media ${Variables.Breakpoints.Tablet} {
        margin-top: ${Variables.Margins.L};
    }

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 14px;
    }
`

export default function Footer() {
    return (
        <Container>
            <Social />

            <Copy>
                &copy; {SiteData.Author} | {SiteData.Year}
            </Copy>
        </Container>
    )
}
