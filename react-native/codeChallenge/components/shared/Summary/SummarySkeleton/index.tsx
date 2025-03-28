import React from 'react';
import { View, Text } from 'react-native';

//Styles
import { styles } from './styles';

//Utils
// import Skeleton from '../../Skeleton';

export default function SummarySkeleton() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <View style={styles.balanceBox}>
                <Text style={styles.label}>Balance</Text>
                <Text style={styles.balance}>lOADING...</Text>
                {/* <Skeleton width={80} height={15} /> */}
            </View>
        </View>
    );
} 