// Packages
import React, { useState } from "react"
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
    position: relative;
    z-index: 997;

    @media ${Variables.Breakpoints.Mobile} {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100vw;
        height: 100vh;
        background-color: ${Variables.Colors.Background};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: ${Variables.Transitions.Long};
        transition-timing-function: ${Variables.Transitions.Bezier};

        .ButtonDelay1,
        .ButtonDelay2 {
            margin-bottom: ${Variables.Margins.L};
        }

        .ButtonDelay1,
        .ButtonDelay2,
        .ButtonDelay3 {
            opacity: 0;
            transform: translateX(-${Variables.Margins.XS});
            transition: ${Variables.Transitions.Short};
        }

        &.Open {
            left: 0;

            .ButtonDelay1,
            .ButtonDelay2,
            .ButtonDelay3 {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
`

const Burger = styled.div`
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    z-index: 998;
    display: none;

    span {
        width: 100%;
        height: 2px;
        background-color: ${Variables.Colors.White};
        border-radius: ${Variables.Radiuses.Round};
        position: absolute;
        left: 0;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.Open span {
        &:first-child {
            transform: rotate(45deg);
            top: 9px;
        }

        &:nth-child(2) {
            width: 0;
        }

        &:last-child {
            transform: rotate(-45deg);
            bottom: 9px;
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: block;
    }
`

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const Open = isOpen ? "Open" : ""
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const BurgerOpen = isBurgerOpen ? "Open" : ""

    return (
        <Container>
            <Link href="/" passHref>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
            </Link>

            <Burger
                onClick={() => {
                    setIsOpen(!isOpen)
                    setIsBurgerOpen(!isBurgerOpen)
                }}
                className={BurgerOpen}
            >
                <span />
                <span />
                <span />
            </Burger>

            <Nav className={Open}>
                {NavLinks.map((item, index) => (
                    <ButtonMenu href={item.url} key={index} id="1">
                        {item.title}
                    </ButtonMenu>
                ))}

                <About />
                <Contact />
            </Nav>
        </Container>
    )
}
