import { StyleSheet } from "react-native";

export const COLORS = {
    black: "#000000",
    white: "#ffffff",
    link: "#364fc7",
    green: "#5c940d",
    orange: "#e47404",

    error: "#FAA19B",
    warning: "#E07F20",

    backgroundLight: "#ffffff",
    //backgroundDark: "#0F182D", //FOR LATER
}

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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

