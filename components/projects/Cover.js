// Packages
import React from "react"
import styled, { keyframes } from "styled-components"

// Components
import { H1, H2 } from "../styles/Fonts"
import Picture from "../ui/Picture"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"

// Styles
const AnimationTitle = keyframes`
    from {
        opacity: 0;
        transform: translateX(-${Variables.Margins.S});
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`

const Container = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100vh;
    transition: ${Variables.Transitions.Long};
    overflow: hidden;

    &.Scrolled {
        height: 0;
    }
`

const PictureStyled = styled(Picture)`
    position: fixed;
    z-index: 0;
    height: 70vh;
    top: calc(50% - 70vh / 2);
    margin-right: -35%;
    right: 0;

    img {
        height: 100%;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${Variables.Margins.XXL} 5vw;
    color: ${Variables.Colors.White};

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: ${Variables.Colors.White20};
        backdrop-filter: blur(2px);
    }

    & > * {
        position: relative;
        z-index: 2;
    }

    h1,
    h2 {
        animation: ${AnimationTitle};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        transform: translateY(-${Variables.Margins.S});
        opacity: 0;

        &.Delay1 {
            animation-delay: 0.2s;
        }

        &.Delay2 {
            animation-delay: 0.4s;
        }

        &.Delay3 {
            animation-delay: 0.6s;
        }
    }
`

class Cover extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = event => {
        const ScrollTop = window.pageYOffset

        if (ScrollTop > 5) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
            <Container className={this.state.hasScrolled && "Scrolled"}>
                <PictureStyled
                    small={`/covers/s-cover-${this.props.cover}.png`}
                    medium={`/covers/m-cover-${this.props.cover}.png`}
                    large={`/covers/l-cover-${this.props.cover}.png`}
                    alt={`Cover ${this.props.title}`}
                    fit="contain"
                />

                <Content>
                    <Fade>
                        <H1 className="Delay0">{this.props.title}</H1>
                    </Fade>
                    <Fade>
                        <H2 className="Delay1">{this.props.subtitle}</H2>
                    </Fade>
                    <Fade>
                        <H2 className="Delay2">{this.props.position}</H2>
                    </Fade>
                    <Fade>
                        <H2 className="Delay3">{this.props.city}</H2>
                    </Fade>
                </Content>
            </Container>
        )
    }
}

export default Cover
