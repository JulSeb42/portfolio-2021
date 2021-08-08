// Packages
import React from "react"
import styled, { css } from "styled-components"
import { ReactSVG } from "react-svg"

// Styles
const Container = styled(ReactSVG)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${props => `${props.size}px`};
        height: ${props => `${props.size}px`};
    }

    svg {
        fill: black;
        width: ${props => `${props.size}px`};
        height: ${props => `${props.size}px`};

        path {
            fill: ${props => props.color};
        }
    }
`

export default function Icon(props) {
    return (
        <Container
            src={`/icons/${props.name}.svg`}
            size={props.size}
            color={props.color}
            wrapper="span"
            {...props}
        />
    )
}

export const IconMixin = ({ icon, size, color }) => css`
    content: "";
    mask: url("/icons/${icon}.svg") no-repeat 50% 50%;
    width: ${size};
    height: ${size};
    mask-size: cover;
    background-color: ${color};
    display: inline-block;
`
