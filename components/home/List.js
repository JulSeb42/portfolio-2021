// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 1fr);
    gap: ${Variables.Margins.XXL};
    min-height: 100vh;
    padding: calc(${Variables.Margins.XXL} * 2) 5vw;
    padding-bottom: ${Variables.Margins.XXL};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: 1fr;
    }
`

export default function List(props) {
    return <Container count={props.count}>{props.children}</Container>
}
