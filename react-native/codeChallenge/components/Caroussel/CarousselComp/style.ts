import { COLORS } from "@/Styles/global";
import sizes from "@/utils/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    image: {
        width: 300,
        height: 200,
        marginRight: sizes.scaleWidthSize(10),
        borderRadius: sizes.scaleWidthSize(10),
    },
});