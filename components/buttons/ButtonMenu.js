// Packages
import React from "react"
import styled, { css } from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.button`
    color: ${Variables.Colors.White};
    text-decoration: none;
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Nav};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    border: 1px solid transparent;
    transition: ${Variables.Transitions.Short};
    cursor: pointer;
    border-radius: ${Variables.Radiuses.M};

    &:hover {
        background-color: ${Variables.Colors.White70};
        color: ${Variables.Colors.DarkGray};
        backdrop-filter: blur(20px);
        border-color: ${Variables.Colors.White};
        box-shadow: ${Variables.Shadows.Button};
        transform: translateY(-${Variables.Margins.XXS}) scale(1.05);
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            background-color: transparent;
            color: ${Variables.Colors.White};
            backdrop-filter: blur(0);
            border-color: transparent;
            box-shadow: none;
            transform: translateY(0) scale(1);
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 32px;
        width: 70%;
        text-align: center;
        font-weight: ${Variables.FontWeights.Medium};

        &.ButtonDelay1 {
            transition-delay: 0.6s;
        }

        &.ButtonDelay2 {
            transition-delay: 0.8s;
        }

        &.ButtonDelay3 {
            transition-delay: 1s;
        }
    }
`

export default function ButtonMenu(props) {
    return props.href ? (
        <Link href={props.href} passHref>
            <Container as="a" className={`ButtonDelay${props.id}`} headerLinks>
                {props.children}
            </Container>
        </Link>
    ) : (
        <Container className={`ButtonDelay${props.id}`} {...props} headerLinks>
            {props.children}
        </Container>
    )
}
