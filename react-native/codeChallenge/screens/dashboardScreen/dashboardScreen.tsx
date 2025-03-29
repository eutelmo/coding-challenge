import React from 'react'
import { SafeAreaView, View, RefreshControl, Modal } from 'react-native'

//Styles
import { styles } from './styles';

//Utils
import { useTransaction } from '@/utils/hooks/useTransaction';
import { ScrollView } from 'react-native-gesture-handler';
import { useSnackBarContext } from '@/utils/hooks/useSnackBar';
import { useModalContext } from '@/utils/hooks/useModal';

//Components
import Summary from '@/components/shared/Summary/SummaryComp';
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp';
import CarousselComp from '@/components/Caroussel/CarousselComp';
import ModalComponent from '@/components/shared/Modal';
import SnackBarComponent from '@/components/shared/SnackBars';

export default function DashboardScreen({ navigation }: any) {
    const { isLoading, refetch } = useTransaction();
    const {
        isVisible,
        handleCloseModal,
    } = useModalContext();;

    const {
        isErrorGetProducts,
        closeSnackBarGetProducts,

        isErrorGetTransactions,
        closeSnackBarGetTransactions,

        isErrorOpenModal,
        closeSnackBarOpenModal,

        isErrorInternetConnection,
        closeSnackBarInternetConnection,

        isErrorGeneral,
        closeSnackBarGeneral,
    } = useSnackBarContext();


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

            {/* SnackBar for get products error */}
            <SnackBarComponent
                message="Error fetching products!"
                isVisible={isErrorGetProducts}
                closeFunction={closeSnackBarGetProducts}
            />

            {/* SnackBar for get transactions error */}
            <SnackBarComponent
                message="Error fetching transactions!"
                isVisible={isErrorGetTransactions}
                closeFunction={closeSnackBarGetTransactions}
            />

            {/* SnackBar for open modal error */}
            <SnackBarComponent
                message="Error opening modal!"
                isVisible={isErrorOpenModal}
                closeFunction={closeSnackBarOpenModal}
            />

            {/* SnackBar for internet connection error */}
            <SnackBarComponent
                message="No internet connection!"
                isVisible={isErrorInternetConnection}
                closeFunction={closeSnackBarInternetConnection}
            />

            {/* SnackBar for general error */}
            <SnackBarComponent
                message="An unexpected error occurred!"
                isVisible={isErrorGeneral}
                closeFunction={closeSnackBarGeneral}
            />

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