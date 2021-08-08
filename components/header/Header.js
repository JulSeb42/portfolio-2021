// Packages
import React from "react"
import styled from "styled-components"
import Link from "next/link"

// Components
import Logo from "../ui/Logo"
import ButtonMenu from "../buttons/ButtonMenu"
import About from "./About"
import Contact from "./Contact"
import * as Variables from "../styles/Variables"

// Data
import NavLinks from "../data/NavLinks"

// Styles
const Container = styled.header`
    position: fixed;
    z-index: 997;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${Variables.Margins.M} 5vw;
`

const LogoContainer = styled.a`
    text-decoration: none;
`

const Nav = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: ${Variables.Margins.M};
`

export default function Header() {
    return (
        <Container>
            <Link href="/" passHref>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
            </Link>

            <Nav>
                {NavLinks.map((item, index) => (
                    <ButtonMenu href={item.url} key={index}>
                        {item.title}
                    </ButtonMenu>
                ))}

                <About />
                <Contact />
            </Nav>
        </Container>
    )
}
