// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import { H4, P } from "../styles/Fonts"
import Fade from "../ui/Fade"

// Content
import UiTexts from "../data/UiText"

// Styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${Variables.Margins.L};
`

const Col = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

const Skills = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    li:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }
`

// Content


export default function Intro(props) {
    return (
        <Container>
            <Col>
                <Fade>
                    <H4>{UiTexts.TitleSkills}</H4>
                </Fade>

                <Skills>
                    {props.skills.map((item, index) => (
                        <li key={index}>
                            <Fade>{item}</Fade>
                        </li>
                    ))}
                </Skills>
            </Col>

            <Col>
                <Fade>
                    <H4>{UiTexts.TitleDates}</H4>
                </Fade>

                <Fade>
                    <P>{props.dates}</P>
                </Fade>
            </Col>
        </Container>
    )
}
