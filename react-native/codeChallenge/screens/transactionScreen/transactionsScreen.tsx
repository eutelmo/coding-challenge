import Summary from '@/components/shared/Balance/SummaryComp'
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp'
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

export default function TransactionScreen({ navigation }: any) {
    return (
        <SafeAreaView>
            <View>
                <Summary />
                <TransactionList navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}