import { StyleSheet } from "react-native";

export const COLORS = {
    black: "#000000",
    white: "#ffffff",
    link: "#364fc7",
    green: "#5c940d",
    orange: "#e47404",
    red: "#FF0000",
    gradientGreyDark: "#e0e0e0",
    gradientGreyLight: "#f0f0f0",

    error: "#FAA19B",
    warning: "#E07F20",

    backgroundLight: "#ffffff",
    //backgroundDark: "#0F182D", //FOR LATER
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
    },
    TextRegular: {
        fontFamily: "RegularFont",
    },
    TextSemiBold: {
        fontFamily: "SemiBoldFont",
    },
    TextBold: {
        fontFamily: "BoldFont",
    },
});

