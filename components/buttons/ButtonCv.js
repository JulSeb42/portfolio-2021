// Packages
import React from "react"
import styled from "styled-components"
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

    @media ${Variables.Breakpoints.Tablet} {
        font-size: 20px;
    }

    @media ${Variables.Breakpoints.Mobile} {
        width: 100%;
        text-align: center;

        &:first-child {
            margin-right: 0;
            margin-bottom: ${Variables.Margins.M};
        }
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            box-shadow: none;
            transform: scale(1) translateY(0);
            border-color: transparent;
        }
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
