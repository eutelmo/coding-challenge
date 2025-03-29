import { Transaction } from "./TransactionsProps";

export interface TransactionContextType {
    transactions: Transaction[];
    setTransactions: (transaction: Transaction[]) => void;

    transactionsLoading: boolean;
    setTransactionsLoading: (loading: boolean) => void;

    transactionsError: Error | null;
    setTransactionsError: (error: Error | null) => void;

    balance: number;
    setBalance: (balance: number) => void;
}