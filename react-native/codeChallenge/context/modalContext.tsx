import React, { useState, createContext } from "react";

//Types
import { Transaction } from "@/utils/types/TransactionsProps";
import { ModalTypes } from "@/utils/types/ModalTyps";
import { ContextProps } from "@/utils/types/ContextProps";

export const ModalContext = createContext<ModalTypes | undefined>(undefined);

export function ModalProvider({ children }: ContextProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<Transaction | null>(null);

    const handleOpenModal = (content: Transaction) => {
        setModalContent(content);
        setIsVisible(true);
    }

    const handleCloseModal = () => {
        setModalContent(null);
        setIsVisible(false);
    }

    return [
        <ModalContext.Provider
            value={{
                isVisible, setIsVisible,
                modalContent, setModalContent,
                handleOpenModal,
                handleCloseModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    ]


}
