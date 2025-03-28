import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

//Styles
import { styles } from './styles'

//Components
import Summary from '@/components/shared/Summary/SummaryComp'
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp'


export default function TransactionScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Summary />
                <TransactionList navigation={navigation} isOpened={true} />
            </View>
        </SafeAreaView>
    )
}