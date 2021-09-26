// Packages
import React from "react"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"

// Content
import UiTexts from "../data/UiText"

// Styles
const Container = styled.a`
    font-size: ${Variables.FontSizes.Nav};
    color: ${Variables.Colors.White};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Medium};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    display: inline-flex;
    align-items: center;
    width: auto;
    transform: translateX(-${Variables.Margins.XS});
    border-radius: ${Variables.Radiuses.M};
    border: 1px solid transparent;
    transition: ${Variables.Transitions.Short};

    .Icon {
        margin-left: ${Variables.Margins.XS};

        svg path {
            transition: ${Variables.Transitions.Short};
        }
    }

    &:hover {
        background-color: ${Variables.Colors.White70};
        color: ${Variables.Colors.DarkGray};
        border-color: ${Variables.Colors.White};
        transform: scale(1.05) translateY(-${Variables.Margins.XXS})
            translateX(-${Variables.Margins.XS});

        .Icon svg path {
            fill: ${Variables.Colors.DarkGray};
        }
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            background-color: transparent;
            color: ${Variables.Colors.White};
            border-color: transparent;
            transform: scale(1) translateY(0)
                translateX(-${Variables.Margins.XS});

            .Icon svg path {
                fill: ${Variables.Colors.White};
            }
        }
    }
`

export default function LinkBehance(props) {
    return (
        <Fade>
            <Container
                href={props.url}
                target="_blank"
                rel="noreferrer noopener"
            >
                {UiTexts.LinkBehance}

                <Icon
                    name="link"
                    size={20}
                    color={Variables.Colors.White}
                    className="Icon"
                />
            </Container>
        </Fade>
    )
}
