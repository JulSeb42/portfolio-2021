// Imports
import SiteData from "./SiteData"
import * as Variables from "../styles/Variables"

const SocialLinks = [
    {
        id: 0,
        name: "email",
        url: `mailto:${SiteData.Email}`,
        color: Variables.Colors.Background,
    },
    {
        id: 1,
        name: "linkedin",
        url: "https://www.linkedin.com/in/julien-sebag/",
        color: "#0A66C2",
    },
    {
        id: 2,
        name: "medium",
        url: "https://medium.com/@julien.sebag.1709",
        color: "#000",
    },
    {
        id: 3,
        name: "behance",
        url: "https://www.behance.net/juliensebag",
        color: "#0057FF",
    },
    {
        id: 4,
        name: "dribbble",
        url: "https://dribbble.com/julien-sebag",
        color: "#EA4C89",
    },
    {
        id: 5,
        name: "github",
        url: "https://github.com/JulSeb42",
        color: "#333",
    },
    {
        id: 6,
        name: "codepen",
        url: "https://codepen.io/julien_sebag/",
        color: "#131417",
    },
]

export default SocialLinks
