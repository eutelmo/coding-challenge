import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

//Styles
import { styles } from './styles';

//Components
import Summary from '@/components/shared/Balance/SummaryComp';
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp';
import CarousselComp from '@/components/Caroussel/CarousselComp';

export default function DashboardScreen({ navigation }: any) {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <CarousselComp />
                <Summary />
                <TransactionList navigation={navigation} />

            </View>
        </SafeAreaView>
    )
}