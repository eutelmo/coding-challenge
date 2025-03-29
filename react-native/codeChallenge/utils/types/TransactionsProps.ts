import { GestureResponderEvent } from "react-native";

export interface Transaction {
    id: string;
    createdAt: string;
    name: string;
    amount: string;
    isExpense: boolean;
}

export type TransactionsItemProps = {
    item: Transaction;
    onClick: (event: GestureResponderEvent) => void;
};