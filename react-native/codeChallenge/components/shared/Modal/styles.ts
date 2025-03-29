import { StyleSheet } from "react-native";
import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";


export const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: sizes.scaleWidthSize(275),
        height: "auto",
        borderRadius: 10,
        shadowColor: COLORS.gradientGreyLight,
        backgroundColor: COLORS.white,
        backdropFilter: COLORS.white,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },

    modalContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    titleBox: {
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 1,
    },

    title: {
        alignSelf: "center",
        fontFamily: "BoldFont",
        fontSize: sizes.scaleWidthSize(14),
    },

    modalTxt: {
        marginTop: 20,
        fontFamily: "RegularFont",
        textAlign: "center",
        fontSize: sizes.scaleWidthSize(14),
    },

    btnExit: {
        marginTop: 30,
        width: sizes.scaleWidthSize(160),
        justifyContent: "center",
        alignItems: "center",
        height: sizes.scaleHeightSize(48),
        backgroundColor: COLORS.orange,
        borderRadius: 10,
        padding: 10,
    },
    btnTxtExit: {
        fontFamily: "BoldFont",
        fontSize: sizes.scaleWidthSize(14),
        color: COLORS.white,
    },
    btnCancel: {
        marginTop: 30,
        width: sizes.scaleWidthSize(160),
        justifyContent: "center",
        alignItems: "center",
        height: sizes.scaleHeightSize(48),
        borderRadius: 10,
        padding: 10,
    },
    btnTxtCancel: {
        fontFamily: "BoldFont",
        fontSize: sizes.scaleWidthSize(14),
    },

    btnBody: {
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
    },

})