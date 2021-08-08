// Colors
export const Colors = {
    Background: "#001429",
    Border: "#333",
    White: "#FFF",
    White70: "rgba(255, 255, 255, 0.7)",
    White20: "rgba(255, 255, 255, 0.2)",
    White5: "rgba(255, 255, 255, 0.05)",
    Black: "#0A0B08",
    DarkGray: "#333",
    DarkBlue: "#002952",
}

// Shadows
export const Shadows = {
    Button: "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)",
    Modal: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5)",
}

// Effects
export const Effects = {}

// Margins
export const Margins = {
    XXL: "48px",
    XL: "32px",
    L: "24px",
    M: "16px",
    S: "12px",
    XS: "8px",
    XXS: "4px",
}

// Fonts
export const FontFamilies = {
    Body: "'DM Sans', sans-serif",
}

export const FontSizes = {
    TitlesXL: "8vw",
    TitlesXLMobile: "32px",
    TitlesL: "3vw",
    TitlesLMobile: "24px",
    TitlesM: "32px",
    TitlesMMobile: "20px",
    TitlesS: "20px",
    Body: "16px",
    Nav: "18px",
    Modal: "2vw",
    Small: "14px",
}

// Font weights
export const FontWeights = {
    Regular: 400,
    Medium: 500,
    Bold: 700,
}

// Line height
export const LineHeight = 1.4

export const Radiuses = {
    XL: "16px",
    L: "12px",
    M: "8px",
    S: "4px",
    Round: "99em",
}

// Container template
export const Container = {
    Template: "1fr 600px 1fr",
    Column: 2,
    Padding: `${Margins.XXL} 0`,

    TemplateTablet: "1fr",
    ColumnTablet: 1,
    PaddingTablet: `${Margins.XXL} 5vw`,
}

// Transitions
export const Transitions = {
    Short: "all .2s ease",
    Long: "all .5s ease",
    Fade: "all 1s ease",
    Bezier: "cubic-bezier(0.25, 0.75, 0, 0.66)",
}

// Media queries
const DevicesSizes = {
    Mobile: "600px",
    Tablet: "768px",
}

export const Breakpoints = {
    Mobile: `(max-width: ${DevicesSizes.Mobile})`,
    Tablet: `(max-width: ${DevicesSizes.Tablet})`,
}
