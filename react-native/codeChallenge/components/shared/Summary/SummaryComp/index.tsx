import React from 'react';
import { View, Text } from 'react-native';

//Styles
import { styles } from './styles';

//Skeleton Screen
import SummarySkeleton from '../SummarySkeleton';


export default function Summary() {
    const isLoading = true;

    if (isLoading) return <SummarySkeleton />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <View style={styles.balanceBox}>
                <Text style={styles.label}>Balance</Text>
                <Text style={styles.balance}>98.76€</Text>
            </View>
        </View>
    );
} 