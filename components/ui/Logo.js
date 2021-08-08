// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.p`
    color: ${Variables.Colors.White};
    text-decoration: none;
    font-size: ${Variables.FontSizes.Nav};
    font-weight: ${Variables.FontWeights.Medium};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};
`

const Subtitle = styled.span`
    font-weight: ${Variables.FontWeights.Regular};
`

export default function Logo() {
    return (
        <Container>
            {SiteData.Author}
            <Subtitle>{SiteData.Subtitle}</Subtitle>
        </Container>
    )
}
