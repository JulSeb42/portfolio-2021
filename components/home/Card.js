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
        transform: translateY(-${Variables.Margins.S});
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`

const Wrapper = styled.div`
    background-color: ${Variables.Colors.White20};
    backdrop-filter: blur(20px);
    border-radius: ${Variables.Radiuses.XL};
    border: 1px solid ${Variables.Colors.White70};
    transition: ${Variables.Transitions.Short};

    &:hover {
        transform: translateY(-${Variables.Margins.XS}) scale(1.02);
        box-shadow: ${Variables.Shadows.Modal};
    }

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
    }
`

const Container = styled.a`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
    width: 100%;
    height: 100%;
    padding: ${Variables.Margins.L};
    text-decoration: none;
`

const PictureStyled = styled(Picture)`
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
`

const Content = styled.div`
    align-self: end;
`

const Title = styled.h3`
    color: ${Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Bold};
    font-size: ${Variables.FontSizes.TitlesL};
`

const Subtitle = styled.h5`
    color: ${Variables.Colors.White70};
    font-weight: ${Variables.FontWeights.Medium};
    font-size: ${Variables.FontSizes.TitlesM};
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
                        height="200px"
                        width="auto"
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
