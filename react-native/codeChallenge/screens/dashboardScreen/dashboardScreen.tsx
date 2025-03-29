import React, { useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, RefreshControl, Modal } from 'react-native'

//Styles
import { styles } from './styles';

//Components
import Summary from '@/components/shared/Summary/SummaryComp';
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp';
import CarousselComp from '@/components/Caroussel/CarousselComp';
import ModalComponent from '@/components/shared/Modal';

//Utils
import { useTransaction } from '@/utils/hooks/useTransaction';
import { ScrollView } from 'react-native-gesture-handler';
import { ModalContext } from '@/context/modelContext';

export default function DashboardScreen({ navigation }: any) {
    const { isLoading, refetch } = useTransaction();
    const {
        isVisible,
        handleCloseModal,
    } = useContext(ModalContext);


    return (
        <>
            <Modal
                animationType="fade"
                visible={isVisible}
                supportedOrientations={["portrait"]}
                onRequestClose={() => {
                    handleCloseModal();
                }}
                presentationStyle="overFullScreen"
                transparent={true}
            >
                <ModalComponent />
            </Modal>
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
        </>
    )
}