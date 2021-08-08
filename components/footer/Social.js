// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonMenu from "../buttons/FooterSocial"
import * as Variables from "../styles/Variables"

// Data
import SocialLinks from "../data/SocialLinks"

// Styles
const Container = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(${props => props.count}, auto);
    gap: ${Variables.Margins.M};

    @media ${Variables.Breakpoints.Tablet} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export default function Social() {
    return (
        <Container count={SocialLinks.length}>
            {SocialLinks.map(item => (
                <ButtonMenu social href={item.url} key={item.id} social>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </ButtonMenu>
            ))}
        </Container>
    )
}
