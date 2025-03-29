import { COLORS } from '@/Styles/global';
import sizes from '@/utils/sizes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,

    },
    title: {
        fontSize: sizes.FONT_SIZE_18,
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
        fontSize: sizes.FONT_SIZE_16,
    },
    balance: {
        fontSize: sizes.FONT_SIZE_16,
        fontWeight: 'bold',
    },
});