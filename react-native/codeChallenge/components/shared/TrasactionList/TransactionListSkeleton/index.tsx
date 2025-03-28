import React from 'react'
import { View, Text } from 'react-native';

//Styles
import { styles } from './styles';

export default function TransactionListSkeleton({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Recent transactions</Text>
            </View>
            <View style={styles.transaction}>
                <Text style={styles.label}>LOADING..</Text>
                <Text style={styles.amount}>
                    LOADING...
                </Text>
            </View>
            <View style={styles.transaction}>
                <Text style={styles.label}>LOADING..</Text>
                <Text style={styles.amount}>
                    LOADING...
                </Text>
            </View>
            <View style={styles.transaction}>
                <Text style={styles.label}>LOADING..</Text>
                <Text style={styles.amount}>
                    LOADING...
                </Text>
            </View>
        </View>
    );
}
