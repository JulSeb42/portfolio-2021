// Packages
import React from "react"
import styled from "styled-components"

// Components
import Modal, { Text } from "./Modal"
import ButtonCv from "../buttons/ButtonCv"
import * as Variables from "../styles/Variables"

// Data
import CvLinks from "../data/CvLinks"
import UiTexts from "../data/UiText"

// Styles
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
    }
`

export default function About() {
    return (
        <Modal title="About">
            <Text className="Delay1">{UiTexts.About1}</Text>
            <Text className="Delay2">{UiTexts.About2}</Text>

            <ButtonContainer className="Delay3">
                {CvLinks.map((item, index) => (
                    <ButtonCv href={item.Url} lang={item.Lang} key={index} />
                ))}
            </ButtonContainer>
        </Modal>
    )
}
