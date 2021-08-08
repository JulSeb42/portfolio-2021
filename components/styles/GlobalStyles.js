// Packages
import { createGlobalStyle } from "styled-components"
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
        background-color: ${Variables.Colors.Background};
        color: ${Variables.Colors.White};
        font-size: ${Variables.FontSizes.Body};

        &.stop-scrolling {
            height: 100vh;
            overflow: hidden;
        }
    }

    h3 {
        font-size: ${Variables.FontSizes.TitlesM};
        font-weight: ${Variables.FontWeights.Bold};
    }

    h4 {
        font-size: ${Variables.FontSizes.TitlesS};
        font-weight: ${Variables.FontWeights.Bold};
    }

    h5 {
        font-size: ${Variables.FontSizes.TitlesS};
        font-weight: ${Variables.FontWeights.Medium};
    }

    p {
        font-size: ${Variables.FontSizes.Body};
        font-weight: ${Variables.FontWeights.Regular};
    }
`

export default GlobalStyles
