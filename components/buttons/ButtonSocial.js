// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"

// Styles
const Container = styled.a`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    transition: ${Variables.Transitions.Short};

    &:hover {
        box-shadow: ${Variables.Shadows.Button};
        transform: scale(1.05) translateY(-${Variables.Margins.XXS});
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            box-shadow: none;
            transform: scale(1) translateY(0);
        }
    }
`

export default function ButtonSocial(props) {
    return (
        <Container
            color={props.color}
            href={props.url}
            target="_blank"
            rel="noreferrer noopener"
        >
            <Icon name={props.icon} size={32} color={Variables.Colors.White} />
        </Container>
    )
}
