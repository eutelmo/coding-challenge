import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundLight,
        padding: sizes.scaleWidthSize(20),
        flex: 1,

    },

    body: {
        marginHorizontal: sizes.scaleWidthSize(5),
    },
    bodyCompenent: {
        marginHorizontal: sizes.scaleWidthSize(20),
    }
})
