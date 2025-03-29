import { Transaction } from "./TransactionsProps";

export interface ModalTypes {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;

    modalContent: Transaction;
    setModalContent: (transaction: Transaction) => void;

    handleOpenModal: (content: Transaction) => void;
    handleCloseModal: () => void;
}