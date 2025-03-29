import React, { useState, useEffect, createContext, useContext } from "react";

//Types
import { ContextProps } from "@/utils/types/ContextProps";
import { Transaction } from "@/utils/types/TransactionsProps";
import { TransactionContextType } from "@/utils/types/TransactionPropsTypes";


export const TransactionDataContext = createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({ children }: ContextProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [transactionsLoading, setTransactionsLoading] = useState<boolean>(false);
    const [transactionsError, setTransactionsError] = useState<Error | null>(null);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        console.log("transaction", transactions);
        setBalance(calculateBalance(transactions));
    }), [transactions];

    function calculateBalance(transactions: Transaction[]) {
        return transactions
            .map(({ amount, isExpense }) => (isExpense ? -parseFloat(amount) : parseFloat(amount)))
            .reduce((acc, value) => acc + value, 0);
    }


    return [
        <TransactionDataContext.Provider
            value={{
                transactions, setTransactions,
                transactionsLoading, setTransactionsLoading,
                transactionsError, setTransactionsError,
                balance, setBalance
            }}>
            {children}
        </TransactionDataContext.Provider>
    ]
}

export function useTransactionContext() {
    const context = useContext(TransactionDataContext);
    if (!context) {
        throw new Error('useTransaction must be used within a TransactionProvider');
    }
    return context;
} 