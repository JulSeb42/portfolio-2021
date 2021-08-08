// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import ButtonMenu from "../buttons/ButtonMenu"
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    position: fixed;
    top: 50vh;
    left: 50vw;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: 999;
    background-color: ${Variables.Colors.White5};
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${Variables.Transitions.Long};
    transition-delay: 0.5s;

    .Delay1,
    .Delay2,
    .Delay3 {
        transform: translateX(-${Variables.Margins.S});
        opacity: 0;
        transition: ${Variables.Transitions.Short};
        transition-delay: 0s;
    }

    &.Open {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        transition-delay: 0s;

        .Content,
        .Close {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 0.6s;
        }

        .Close {
            transition-delay: 0.8s;
        }

        .Delay1,
        .Delay2,
        .Delay3 {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 0.8s;
        }

        .Delay2 {
            transition-delay: 1s;
        }

        .Delay3 {
            transition-delay: 1.2s;
        }
    }
`

const Close = styled(Icon)`
    position: absolute;
    top: ${Variables.Margins.XL};
    right: 5vw;
    cursor: pointer;
    transform: translateY(-10px);
    opacity: 0;
    transition: ${Variables.Transitions.Long};
    transition-delay: 0s;

    @media ${Variables.Breakpoints.Mobile} {
        right: inherit;
        left: 5vw;
        top: ${Variables.Margins.M};
    }
`

const Content = styled.div`
    border: 1px solid ${Variables.Colors.White70};
    border-radius: ${Variables.Radiuses.XL};
    width: 60%;
    background-color: ${Variables.Colors.White70};
    backdrop-filter: blur(40px);
    padding: ${Variables.Margins.XL};
    font-size: ${Variables.FontSizes.Modal};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XL};
    box-shadow: ${Variables.Shadows.Modal};
    transform: translateY(-10px);
    opacity: 0;
    transition: ${Variables.Transitions.Long};
    transition-delay: 0.1s;
    position: relative;
    z-index: 1000;
    color: ${Variables.Colors.DarkGray};

    @media ${Variables.Breakpoints.Tablet} {
        width: 90%;
    }
`

export const Text = styled.p`
    font-size: 2vw;

    @media ${Variables.Breakpoints.Tablet} {
        font-size: 28px;
    }
`

export default function Modal(props) {
    const [isOpen, setIsOpen] = useState(false)
    const Open = isOpen ? "Open" : ""

    const [isStopped, setIsStopped] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("stop-scrolling", isStopped)
    }, [isStopped])

    return (
        <>
            <ButtonMenu
                onClick={() => {
                    setIsStopped(!isStopped)
                    setIsOpen(!isOpen)
                }}
                id={
                    props.title === "About" ? 2 : props.title === "Contact" && 3
                }
            >
                {props.title}
            </ButtonMenu>

            <Container className={Open}>
                <Close
                    name="close"
                    color={Variables.Colors.White}
                    size={32}
                    onClick={() => {
                        setIsStopped(!isStopped)
                        setIsOpen(!isOpen)
                    }}
                    className="Close"
                />

                <Content className="Content">{props.children}</Content>
            </Container>
        </>
    )
}
