// Packages
import React from "react"
import styled from "styled-components"

// Components
import Modal, { Text } from "./Modal"
import ButtonCv from "../buttons/ButtonCv"
import * as Variables from "../styles/Variables"

// Data
import CvLinks from "../data/CvLinks"

// Styles
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${Variables.Breakpoints.Mobile} {
        flex-direction: column;
    }
`

// Content
const Text1 =
    "Hi I'm Julien, a French UX / UI / Web Designer based in Warsaw, Poland."

const Text2 =
    "Currently working as a Product Designer at Nielsen, I create cool interfaces, code websites, and usually drink tea."

export default function About() {
    return (
        <Modal title="About">
            <Text className="Delay1">{Text1}</Text>
            <Text className="Delay2">{Text2}</Text>

            <ButtonContainer className="Delay3">
                {CvLinks.map((item, index) => (
                    <ButtonCv href={item.Url} lang={item.Lang} key={index} />
                ))}
            </ButtonContainer>
        </Modal>
    )
}
