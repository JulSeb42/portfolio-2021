// Packages
import React from "react"
import styled from "styled-components"

// Components
import { H3, H4, Small } from "../styles/Fonts"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"

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
                                <img src={props.img} alt={props.alt} />
                            </a>
                        </Fade>

                        <Small>
                            <Fade>{TextVisit}</Fade>
                        </Small>
                    </ImgContainer>
                ) : (
                    <Fade>
                        <img src={props.img} alt={props.alt} />
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
