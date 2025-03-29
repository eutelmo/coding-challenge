import React, { useEffect } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';

//Styles
import { styles } from './styles';
import { COLORS } from '@/Styles/global';

//Types
import { Transaction } from '@/utils/types/TransactionsProps';

//SkeletonScreen
import TransactionListSkeleton from '../TransactionListSkeleton';

//Utils
import { useTransaction } from '@/utils/hooks/useTransaction';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TransactionList({ navigation, isOpened, maxNumber }: { navigation: any; isOpened: boolean, maxNumber: number }) {
    const { transactions, isLoading, refetch } = useTransaction();

    useEffect(() => {
        refetch();
    }, [refetch])

    const transactionsForHomeScreen = maxNumber ? transactions.slice(0, maxNumber) : transactions;

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

            <FlatList
                data={transactionsForHomeScreen}
                keyExtractor={(item, index) => `${item.id + index}`}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.transaction}>
                        <Text style={styles.label}>{item.name}</Text>
                        <Text style={[styles.amount, { color: item.isExpense ? COLORS.orange : COLORS.green }]}>
                            {item.isExpense ? '-' : '+'}{item.amount}€
                        </Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.label}>No transactions available</Text>}
            />

        </View>
    );
}
