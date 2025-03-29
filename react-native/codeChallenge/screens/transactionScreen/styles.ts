import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backgroundLight,
        flex: 1,
    },
    bodyCompenent: {
        marginHorizontal: sizes.scaleWidthSize(20),
    }
})
