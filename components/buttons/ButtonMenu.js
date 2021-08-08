// Packages
import React from "react"
import styled from "styled-components"
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
`

export default function ButtonMenu(props) {
    return props.href ? (
        <Link href={props.href} passHref>
            <Container as="a">{props.children}</Container>
        </Link>
    ) : props.social ? (
        <Container
            as="a"
            target={props.children !== "email" && "_blank"}
            href={props.href}
        >
            {props.children}
        </Container>
    ) : (
        <Container {...props}>{props.children}</Container>
    )
}
