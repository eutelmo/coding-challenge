import React, { useCallback, useMemo } from 'react'

//Utils
import { useTransactionContext } from '@/context/transactionsDataContext'
const url = "https://628b46b07886bbbb37b46173.mockapi.io/api/v1/transactions"

export function useTransaction() {
    const {
        transactions, setTransactions,
        transactionsLoading, setTransactionsLoading,
        transactionsError, setTransactionsError,
    } = useTransactionContext();

    const fetchTransactions = useCallback(async () => {
        try {
            setTransactionsLoading(true);
            setTransactionsError(null);

            const response = await fetch(url);
            const data = await response.json();
            setTransactions(data);
        } catch (err) {
            setTransactionsError(new Error("Error Get Transactions"));
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