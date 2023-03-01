/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "425px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "primary-light": "#147BE3",
                "primary-dark": "#114BB2",
                "secondary-light": "#424656",
                "secondary-dark": "#202533",
                "disable-gray": "#e9ecef",
                // background: "#F2F2F2",
                green: "rgb(77,161,84)",
                "green-light": "rgb(221, 252, 230)",
                red: "rgb(244,63,95)",
                "red-light": "rgb(255, 228, 230)",
                background: "rgba(242, 245, 249 ,1);",
            },
            fontSize: {
                xsm: ".813rem",
            },
            spacing: {
                128: "32rem",
                256: "64rem",
            },
        },
    },
    plugins: [],
};
