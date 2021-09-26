// Packages
import React from "react"
import styled from "styled-components"

// Components
import Modal, { Text } from "./Modal"
import ButtonSocial from "../buttons/ButtonSocial"
import * as Variables from "../styles/Variables"

// Data
import SocialLinks from "../data/SocialLinks"
import UiTexts from "../data/UiText"

// Styles
const Social = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 48px);
    gap: ${Variables.Margins.M};

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(4, 48px);
    }
`

export default function Contact() {
    return (
        <Modal title="Contact">
            <Text className="Delay1">{UiTexts.Contact1}</Text>
            <Text className="Delay2">{UiTexts.Contact2}</Text>

            <Social className="Delay3" count={SocialLinks.length}>
                {SocialLinks.map(item => (
                    <ButtonSocial
                        icon={item.name}
                        color={item.color}
                        url={item.url}
                        key={item.id}
                    />
                ))}
            </Social>
        </Modal>
    )
}
