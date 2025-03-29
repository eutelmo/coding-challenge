import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: sizes.scaleWidthSize(10),
    },
    title: {
        fontSize: sizes.FONT_SIZE_18,
        fontWeight: 'bold',
    },
    link: {
        fontSize: sizes.FONT_SIZE_14,
        color: COLORS.link,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: sizes.scaleWidthSize(5),
    },
    label: {
        fontSize: sizes.FONT_SIZE_14,
    },
    amount: {
        fontSize: sizes.FONT_SIZE_14,
        fontWeight: 'bold',
    },
});
