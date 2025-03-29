import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Styles
import { styles } from './styles'
import { COLORS } from '@/Styles/global'

//Types
import { Transaction, TransactionsItemProps } from '@/utils/types/TransactionsProps'


export default function TransactionsItem({ item, onClick }: TransactionsItemProps) {

    console.log("item", item);

    return (
        <TouchableOpacity
            onPress={onClick}
        >
            <View key={item.id} style={styles.transaction}>
                <Text style={styles.label}>{item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}</Text>
                <Text style={[styles.amount, { color: item.isExpense ? COLORS.orange : COLORS.green }]}>
                    {item.isExpense ? '-' : '+'}{item.amount}€
                </Text>
            </View>
        </TouchableOpacity>
    )
}