import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

//Utils
import { Snackbar } from "react-native-paper";

//Styles
import { styles } from "./styles";

// Types
import { SnackBarProps } from "@/utils/types/SnackBarProps";

export default function SnackBarComponent({ message, isVisible, closeFunction }: SnackBarProps) {
    if (!isVisible) return null;

    return (
        // <View style={styles.container}>
        //     <Text style={styles.text}>{message}</Text>
        // </View>

        <View style={styles.container}>
            <Snackbar
                visible={isVisible}
                onDismiss={closeFunction}
                style={styles.bodyStyle}
                duration={5000}
            >
                <View style={styles.sbBody}>
                    <Text style={styles.sbTxt}>{message}</Text>

                    <TouchableWithoutFeedback onPress={closeFunction}>
                        <View style={styles.closeBtn}>

                            <Text style={styles.sbTxtClose}>X</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Snackbar>
        </View>
    );
}