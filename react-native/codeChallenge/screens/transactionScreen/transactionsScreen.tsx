import React from 'react'
import { SafeAreaView, View, Text, Modal } from 'react-native'

//Styles
import { styles } from './styles'

//Components
import Summary from '@/components/shared/Summary/SummaryComp'
import TransactionList from '@/components/shared/TrasactionList/TransactionListComp'

//Utils
import { useModalContext } from '@/utils/hooks/useModal'
import { useSnackBarContext } from '@/utils/hooks/useSnackBar'
import SnackBarComponent from '@/components/shared/SnackBars'
import ModalComponent from '@/components/shared/Modal'


export default function TransactionScreen({ navigation }: any) {

    //Hook for modal
    const {
        isVisible,
        handleCloseModal,
    } = useModalContext();;

    //hook for snackbar
    const {

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
                <View style={styles.bodyCompenent}>
                    <Summary />
                    <TransactionList navigation={navigation} isOpened={true} />
                </View>
            </SafeAreaView>
        </>
    )
}