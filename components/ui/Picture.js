// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.picture`
    width: ${props => props.width};
    height: ${props => props.height};

    img {
        width: ${props => props.width};
        height: ${props => props.height};
        object-fit: ${props => props.fit};
    }
`

export default function Picture(props) {
    return (
        <Container
            width={props.width || "100%"}
            height={props.height || "auto"}
            fit={props.fit}
            {...props}
        >
            <source media="(max-width: 600px)" srcSet={props.small} />
            <source media="(max-width: 1024px)" srcSet={props.medium} />
            <img src={props.large} alt={props.alt} />
        </Container>
    )
}
