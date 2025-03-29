import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: sizes.scaleWidthSize(10),
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
        fontSize: sizes.scaleWidthSize(10),
        fontWeight: 'bold',
    },
    link: {
        fontSize: sizes.scaleWidthSize(14),
        color: COLORS.link,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: sizes.scaleWidthSize(5),
    },
    label: {
        fontSize: sizes.scaleWidthSize(14),
    },
    amount: {
        fontSize: sizes.scaleWidthSize(14),
        fontWeight: 'bold',
    },
});
