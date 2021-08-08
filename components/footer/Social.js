// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonMenu from "../buttons/ButtonMenu"
import * as Variables from "../styles/Variables"

// Data
import SocialLinks from "../data/SocialLinks"

// Styles
const Container = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(${props => props.count}, auto);
    gap: ${Variables.Margins.M};
`

export default function Social() {
    return (
        <Container count={SocialLinks.length}>
            {SocialLinks.map(item => (
                <ButtonMenu social href={item.url} key={item.id}>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </ButtonMenu>
            ))}
        </Container>
    )
}
