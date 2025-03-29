import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, RefreshControl } from 'react-native'

//Styles
import { styles } from './styles';

//Components
import Summary from '@/components/shared/Summary/SummaryComp';
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp';
import CarousselComp from '@/components/Caroussel/CarousselComp';

//Utils
import { useTransaction } from '@/utils/hooks/useTransaction';
import { ScrollView } from 'react-native-gesture-handler';

export default function DashboardScreen({ navigation }: any) {
    const { transactions, isLoading, refetch } = useTransaction();

    const handleRefresh = () => {
        refetch();
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={refetch}
                        colors={['#9Bd35A', '#689F38']}
                    />
                }
                showsVerticalScrollIndicator={false}
            >

                <View>
                    <CarousselComp />
                    <Summary />
                    <TransactionList navigation={navigation} isOpened={false} maxNumber={3} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}