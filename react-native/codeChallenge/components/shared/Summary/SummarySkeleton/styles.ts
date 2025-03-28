import { COLORS } from '@/Styles/global';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    balanceBox: {
        borderWidth: 1,
        borderColor: COLORS.black,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
    },
    balance: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});