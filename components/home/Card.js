// Packages
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Link from "next/link"

// Components
import * as Variables from "../styles/Variables"
import Picture from "../ui/Picture"

// Styles
const Open = keyframes`
    from {
        transform: translateX(-${Variables.Margins.S});
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

const Wrapper = styled.div`
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    z-index: 1;
    border-radius: ${Variables.Radiuses.XL};

    &.Loading {
        animation: ${Open};
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transform: translateY(-${Variables.Margins.S});
        opacity: 0;

        &:first-child {
            animation-delay: 0.2s;
        }

        &:nth-child(2) {
            animation-delay: 0.4s;
        }

        &:nth-child(3) {
            animation-delay: 0.6s;
        }

        &:nth-child(4) {
            animation-delay: 0.8s;
        }

        &:nth-child(5) {
            animation-delay: 1s;
        }

        &:nth-child(6) {
            animation-delay: 1.2s;
        }
    }

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        border-radius: ${Variables.Radiuses.XL};
    }

    &:first-child:before {
        background-image: linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(to right, currentColor 1px, transparent 1px);
        background-size: 50px 50px;
        color: ${Variables.Colors.White};
    }

    &:nth-child(2):before {
        background-image: radial-gradient(currentColor 1px, transparent 1px);
        background-size: calc(10 * 1px) calc(10 * 1px);
        color: ${Variables.Colors.Red};
    }

    &:nth-child(3):before {
        background-image: radial-gradient(currentColor 2px, transparent 2px),
            radial-gradient(currentColor 2px, transparent 2px);
        background-size: calc(20 * 2px) calc(20 * 2px);
        background-position: 0 0, calc(10 * 2px) calc(10 * 2px);
        color: ${Variables.Colors.Green};
    }

    &:nth-child(4):before {
        background-image: repeating-linear-gradient(
            to right,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent
        );
        background-size: 10px 10px;
        color: ${Variables.Colors.Orange};
    }

    &:nth-child(5):before {
        background-image: repeating-linear-gradient(
            45deg,
            currentColor 0,
            currentColor 1px,
            transparent 0,
            transparent 50%
        );
        background-size: 10px 10px;
        color: ${Variables.Colors.Blue};
    }

    &:nth-child(6):before {
        background: linear-gradient(135deg, currentColor 25%, transparent 25%) -25px
                0,
            linear-gradient(225deg, currentColor 25%, transparent 25%) -25px 0,
            linear-gradient(315deg, currentColor 25%, transparent 25%),
            linear-gradient(45deg, currentColor 25%, transparent 25%);
        background-size: calc(2 * 25px) calc(2 * 25px);
        color: ${Variables.Colors.Yellow};
    }
`

const Container = styled.a`
    color: ${Variables.Colors.White};
    text-decoration: none;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;

    background-color: ${Variables.Colors.Background};
    border: 1px solid ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.XL};
    transition: ${Variables.Transitions.Short};
    overflow: hidden;

    &:hover {
        transform: translate(-${Variables.Margins.L}, -${Variables.Margins.L});
    }

    @media (hover: none) and (pointer: coarse) {
        transform: translate(-${Variables.Margins.M}, -${Variables.Margins.M});

        &:hover {
            transform: translate(
                -${Variables.Margins.M},
                -${Variables.Margins.M}
            );
        }

        @media ${Variables.Breakpoints.Mobile} {
            transform: translate(
                -${Variables.Margins.S},
                -${Variables.Margins.S}
            );
        }
    }
`

const PictureStyled = styled(Picture)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: -50%;
    z-index: 1;
    padding: ${Variables.Margins.L} 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 2;
    padding: ${Variables.Margins.L};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    height: 100%;
    background-color: ${Variables.Colors.White5};
    backdrop-filter: blur(5px);
    border-radius: ${Variables.Radiuses.XL};
    overflow: hidden;
`

const Title = styled.h2`
    font-weight: ${Variables.FontWeights.Bold};
    font-size: ${Variables.FontSizes.TitlesL};

    @media ${Variables.Breakpoints.Mobile} {
        font-size: ${Variables.FontSizes.TitlesLMobile};
    }
`

const Subtitle = styled.h3`
    color: ${Variables.Colors.White70};
    font-weight: ${Variables.FontWeights.Medium};
    font-size: ${Variables.FontSizes.TitlesMMobile};
`

export default function Card(props) {
    const [isLoaded, setIsLoaded] = useState(true)
    setTimeout(() => setIsLoaded(false), 2000)
    const Loaded = isLoaded ? "Loading" : ""

    return (
        <Wrapper className={Loaded}>
            <Link href={props.href} passHref {...props}>
                <Container>
                    <PictureStyled
                        small={`/covers/s-cover-${props.cover}.png`}
                        medium={`/covers/m-cover-${props.cover}.png`}
                        large={`/covers/l-cover-${props.cover}.png`}
                        alt={`Cover ${props.title}`}
                    />

                    <Content>
                        <Title>{props.title}</Title>
                        <Subtitle>{props.subtitle}</Subtitle>
                    </Content>
                </Container>
            </Link>
        </Wrapper>
    )
}
