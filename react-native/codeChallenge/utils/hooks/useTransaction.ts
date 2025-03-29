import React, { useCallback, useMemo } from 'react'

//Utils
import { useTransactionContext } from '@/context/transactionsDataContext'
import { useSnackBarContext } from './useSnackBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
const url = "https://628b46b07886bbbb37b46173.mockapi.io/api/v1/transactions"

export function useTransaction() {
    const {
        transactions, setTransactions,
        transactionsLoading, setTransactionsLoading,
        transactionsError, setTransactionsError,
    } = useTransactionContext();

    //SnackBar Hook
    const {
        setIsErrorGetTransactions,
        setIsErrorInternetConnection
    } = useSnackBarContext();

    //check have conectio
    const checkConnection = async () => {
        const state = await NetInfo.fetch();
        return state.isConnected;
    };

    const fetchTransactions = useCallback(async () => {
        try {
            setTransactionsLoading(true);
            setTransactionsError(null);
            setIsErrorGetTransactions(false);

            const isConnected = await checkConnection();
            if (isConnected) {
                setIsErrorInternetConnection(false);
                const response = await fetch(url);
                const data = await response.json();

                // Save AsyncStorage
                await AsyncStorage.setItem('transactionsData', JSON.stringify(data));
                setTransactions(data);
            } else {
                setIsErrorInternetConnection(true);
                const cachedData = await AsyncStorage.getItem('transactionsData');
                if (cachedData) {
                    setTransactions(JSON.parse(cachedData));
                } else {
                    setTransactionsError("No data available offline.");
                    setIsErrorGetTransactions(true);
                }
            }
        } catch (err) {
            setTransactionsError("Error Get Transactions");
            setIsErrorGetTransactions(true);
        } finally {
            setTransactionsLoading(false);
        }
    }, [setTransactions, setTransactionsError, setTransactionsLoading]);



    return {
        transactions,
        isLoading: transactionsLoading,
        error: transactionsError,
        refetch: fetchTransactions
    };
}