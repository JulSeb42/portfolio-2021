// Packages
import styled from "styled-components";

// Components
import { IconMixin } from "../ui/Icon"

// Variables
import * as Variables from "./Variables"

// Styles
export const H1 = styled.h1`
    font-size: ${Variables.FontSizes.TitlesXL};
    font-weight: ${Variables.FontWeights.Bold};

    @media ${Variables.Breakpoints.Mobile} {
        font-size: ${Variables.FontSizes.TitlesXLMobile};
    }
`

export const H2 = styled.h2`
    font-size: ${Variables.FontSizes.TitlesL};
    font-weight: ${Variables.FontWeights.Medium};

    @media ${Variables.Breakpoints.Mobile} {
        font-size: ${Variables.FontSizes.TitlesLMobile};
    }
`

export const H3 = styled.h3`
    font-size: ${Variables.FontSizes.TitlesM};
    font-weight: ${Variables.FontWeights.Bold};
`

export const H4 = styled.h4`
    font-size: ${Variables.FontSizes.TitlesS};
    font-weight: ${Variables.FontWeights.Bold};
`

export const H5 = styled.h5`
    font-size: ${Variables.FontSizes.TitlesS};
    font-weight: ${Variables.FontWeights.Medium};
`

export const P = styled.p`
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Regular};
`

export const Small = styled.small`
    font-size: ${Variables.FontSizes.Small};
    font-weight: ${Variables.FontWeights.Regular};
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: grid;
        grid-template-columns: 12px 1fr;
        gap: ${Variables.Margins.XXS};

        &:before {
            ${IconMixin({
                icon: "chevron-right",
                size: "14px",
                color: Variables.Colors.White
            })};
            margin-top: 4px;
        }
    }
`