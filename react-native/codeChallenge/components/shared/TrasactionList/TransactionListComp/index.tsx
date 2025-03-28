import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';

//Styles
import { styles } from './styles';
import { COLORS } from '@/Styles/global';

//Types
import { Transaction } from '@/utils/types/TransactionsProps';

//SkeletonScreen
import TransactionListSkeleton from '../TransactionListSkeleton';


const transactions: Transaction[] = [
    { id: '1', createdAt: '2022-05-22T13:15:56.840Z', name: 'Rustic Fresh Shirt', amount: '184.17', isExpense: true },
    { id: '2', createdAt: '2022-06-10T10:45:30.123Z', name: 'Netflix', amount: '19.99', isExpense: true },
    { id: '3', createdAt: '2022-06-15T14:20:10.456Z', name: 'Amazon', amount: '17.43', isExpense: true },
    { id: '4', createdAt: '2022-07-01T09:00:00.789Z', name: 'Rand', amount: '37.74', isExpense: false },
];


export default function TransactionList({ navigation, isOpened }: { navigation: any; isOpened: boolean }) {
    const isLoading = true;

    if (isLoading) return <TransactionListSkeleton />

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Recent transactions</Text>
                {!isOpened ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TransactionScreen")}>
                        <Text style={styles.link}>See all</Text>
                    </TouchableOpacity>
                ) : null}
            </View>
            {transactions.map((item) => (
                <View key={item.id} style={styles.transaction}>
                    <Text style={styles.label}>{item.name}</Text>
                    <Text style={[styles.amount, { color: item.isExpense ? COLORS.orange : COLORS.green }]}>
                        {item.isExpense ? '-' : '+'}{item.amount}€
                    </Text>
                </View>
            ))}
        </View>
    );
}
