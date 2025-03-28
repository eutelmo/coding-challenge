import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//Styles
import { styles } from './styles';
import { COLORS } from '@/Styles/global';

//Types
import { Transaction } from '@/utils/types/TransactionsProps';

//SkeletonScreen
import TransactionListSkeleton from '../TransactionListSkeleton';

//Utils
import { useTransaction } from '@/utils/hooks/useTransaction';
import { useModalContext } from '@/utils/hooks/useModal';

//Components
import TransactionsItem from '../TransactionsItem';


export default function TransactionList({ navigation, isOpened, maxNumber }: { navigation: any; isOpened: boolean, maxNumber?: number }) {
    const { handleOpenModal } = useModalContext();

    const { transactions, isLoading, refetch } = useTransaction();
    const [selectedItem, setSelecteItem] = useState<Transaction>();


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
                style={styles.listContainer}
                keyExtractor={(item, index) => `${item.id + index}`}
                renderItem={({ item }) => (
                    <TransactionsItem item={item} onClick={() => handleOpenModal(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<Text style={styles.label}>No transactions available</Text>}
            />

        </View>
    );
}
