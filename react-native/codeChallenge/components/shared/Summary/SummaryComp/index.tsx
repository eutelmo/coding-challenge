import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

//Styles
import { styles } from './styles';

//Skeleton Screen
import SummarySkeleton from '../SummarySkeleton';

//Utils
import { useBalance } from '@/utils/hooks/useBalance';
import { useTransaction } from '@/utils/hooks/useTransaction';


export default function Summary() {
    const { balance, isLoading } = useBalance();
    const { transactions, refetch } = useTransaction();

    if (isLoading) return <SummarySkeleton />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <View style={styles.balanceBox}>
                <Text style={styles.label}>Balance</Text>
                <Text style={styles.balance}>{balance}€</Text>
            </View>
        </View>
    );
} 