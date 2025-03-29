import { StyleSheet } from "react-native";
import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
    },

    bodyStyle: {
        backgroundColor: COLORS.red,
    },
    sbBody: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sbTxt: {
        color: COLORS.white,
        fontSize: sizes.FONT_SIZE_14,
    },
    sbTxtClose: {
        textAlign: "right",
        fontSize: sizes.scaleWidthSize(18),
    },
    closeBtn: {
        width: sizes.scaleWidthSize(100)
    }
});
