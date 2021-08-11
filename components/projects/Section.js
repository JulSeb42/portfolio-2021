// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import { H3, H4, Small } from "../styles/Fonts"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"
import Picture from "../ui/Picture"

// Styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};
`

const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

const Video = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
`

const Img = styled(Picture)`
    display: block;

    img {
        width: 100%;
        height: auto;
    }

    ${props =>
        props.background &&
        css`
            background-color: ${Variables.Colors.White70};
            padding: ${Variables.Margins.S};
            border-radius: ${Variables.Radiuses.XL};
        `}
`

// Content
const TextVisit = "Click on image to visit."

export default function Section(props) {
    return (
        <Container>
            {props.title && !props.sub && (
                <Fade>
                    <H3>{props.title}</H3>
                </Fade>
            )}
            {props.title && props.sub && (
                <Fade>
                    <H4>{props.title}</H4>
                </Fade>
            )}

            {props.children}

            {props.img &&
                (props.url ? (
                    <ImgContainer>
                        <Fade>
                            <a
                                href={props.url}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Img
                                    small={`/images/s-${props.img}`}
                                    medium={`/images/m-${props.img}`}
                                    large={`/images/l-${props.img}`}
                                    alt={props.alt}
                                    background={props.background}
                                    fit="contain"
                                />
                            </a>
                        </Fade>

                        <Small>
                            <Fade>{TextVisit}</Fade>
                        </Small>
                    </ImgContainer>
                ) : (
                    <Fade>
                        <Img
                            small={`/images/s-${props.img}`}
                            medium={`/images/m-${props.img}`}
                            large={`/images/l-${props.img}`}
                            alt={props.alt}
                            background={props.background}
                            fit="contain"
                        />
                    </Fade>
                ))}

            {props.video && (
                <Fade>
                    <Video src={props.video} frameBorder="0" allowFullScreen />
                </Fade>
            )}
        </Container>
    )
}
