import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";

//Context 
import { ModalContext } from "@/context/modalContext";

//Styles
import { styles } from "./styles";
import { COLORS } from "@/Styles/global";


export default function ModalComponent() {
    const { modalContent, handleCloseModal } = useContext(ModalContext);

    if (!modalContent) {
        return null;
    }

    const formattedDate = new Date(modalContent.createdAt);

    const date = formattedDate.toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const time = formattedDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <TouchableWithoutFeedback onPress={() => handleCloseModal()}>
            <View style={styles.overlay}>
                <TouchableWithoutFeedback onPress={() => null}>
                    <View style={styles.modalContainer}>
                        <View
                            style={styles.titleBox}
                        >
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        color: modalContent.isExpense ? COLORS.orange : COLORS.green,
                                    }
                                ]}
                            >
                                {modalContent.isExpense ? `- ${modalContent.amount}` : `+ ${modalContent.amount}`}
                            </Text>
                        </View>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTxt}>
                                {modalContent.name}
                            </Text>

                            <Text style={styles.modalTxt}>
                                {`${date}, ${time}`}
                            </Text>

                            <View style={styles.btnBody}>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleCloseModal();
                                    }}
                                >
                                    <View style={styles.btnExit}>
                                        <Text style={styles.btnTxtExit}>Exit</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        handleCloseModal();
                                    }}
                                >
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}