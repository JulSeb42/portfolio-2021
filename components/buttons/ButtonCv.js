// Packages
import React from "react"
import styled from "styled-components";
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.a`
    color: ${Variables.Colors.Black};
    text-decoration: none;
    font-size: 1.3vw;
    border: 1px solid transparent;
    padding: ${Variables.Margins.M};
    background-color: ${Variables.Colors.White70};
    border-radius: ${Variables.Radiuses.L};
    transition: ${Variables.Transitions.Short};
    font-weight: ${Variables.FontWeights.Medium};

    &:hover {
        box-shadow: ${Variables.Shadows.Button};
        transform: scale(1.05) translateY(-${Variables.Margins.XXS});
        border-color: ${Variables.Colors.White};
    }

    &:first-child {
        margin-right: ${Variables.Margins.M};
    }
`

// Content
const Text = "Check my CV"

export default function ButtonCv(props) {
    return (
        <Link href={props.href} passHref>
            <Container target="_blank" rel="noreferrer noopener">
                {Text} ({props.lang.toUpperCase()})
            </Container>
        </Link>
    )
}
