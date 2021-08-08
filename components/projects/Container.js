// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Wrapper = styled.main`
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.Background};
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    padding: ${Variables.Container.Padding};

    & > * {
        grid-column: ${Variables.Container.Column};
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXL};
`

export default function Container(props) {
    return (
        <Wrapper>
            <Content>{props.children}</Content>
        </Wrapper>
    )
}
