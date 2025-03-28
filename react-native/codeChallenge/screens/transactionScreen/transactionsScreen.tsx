import Summary from '@/components/shared/Balance/SummaryComp'
import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

export default function TransactionScreen() {
    return (
        <SafeAreaView>
            <View>
                <Summary />
            </View>
        </SafeAreaView>
    )
}