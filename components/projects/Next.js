// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"

// Content
import UiTexts from "../data/UiText"

// Styles
const Container = styled.a`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.DarkBlue};
    backdrop-filter: blur(20px);
    text-decoration: none;
    font-size: ${Variables.FontSizes.Modal};
    transition: ${Variables.Transitions.Short};

    .Icon {
        margin-left: ${Variables.Margins.XXS};
        transition: ${Variables.Transitions.Short};
    }

    &:hover {
        background-color: ${Variables.Colors.Background};

        .Icon {
            margin-left: ${Variables.Margins.XS};
        }
    }

    @media ${Variables.Breakpoints.Tablet} {
        font-size: 24px;
        height: 200px;
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            background-color: ${Variables.Colors.DarkBlue};

            .Icon {
                margin-left: ${Variables.Margins.XXS};
            }
        }
    }
`

export default function Next(props) {
    return (
        <Link href={props.href} passHref>
            <Container>
                {UiTexts.NextProject}

                <Icon
                    name="arrow-right"
                    color={Variables.Colors.White}
                    size={24}
                    className="Icon"
                />
            </Container>
        </Link>
    )
}
