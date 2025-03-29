import { COLORS } from "@/Styles/global";
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
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 14,
        color: COLORS.link,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    label: {
        fontSize: 14,
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
