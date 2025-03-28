import React from 'react';
import { View, Text } from 'react-native';
//import { useBalance } from '../../hooks/useBalance';
//import BalanceSkeleton from '../BalanceSkeleton';

//Styles
import { styles } from './styles';


export default function Summary() {

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