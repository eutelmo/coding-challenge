import React, { useCallback, useMemo } from 'react'

//Utils
import { useTransactionContext } from '@/context/transactionsDataContext'
import { useSnackBarContext } from './useSnackBar';
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
    } = useSnackBarContext();

    const fetchTransactions = useCallback(async () => {
        try {
            setTransactionsLoading(true);
            setTransactionsError(null);
            setIsErrorGetTransactions(false);

            const response = await fetch(url);
            const data = await response.json();
            setTransactions(data);
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