import { useTransactionContext } from '@/context/transactionsDataContext'
import React from 'react'

export function useBalance() {
    const { balance, transactionsLoading, transactionsError } = useTransactionContext();
    return { balance, isLoading: transactionsLoading, error: transactionsError };
}