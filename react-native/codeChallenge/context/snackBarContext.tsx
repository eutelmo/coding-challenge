import React, { useState, createContext, useContext, useEffect } from "react";

//Types
import { ContextProps } from "@/utils/types/ContextProps";
import { SnackBarTypes } from "@/utils/types/SnackBarContextProps";

export const SnackBarContext = createContext<SnackBarTypes | undefined>(undefined);

export default function SnackBarProvider({ children }: ContextProps) {

    // SnackBar for get products
    const [isErrorGetProducts, setIsErrorGetProducts] = useState<boolean>(false);

    const onToggleSnackBarGetProducts = () => setIsErrorGetProducts(true);
    const closeSnackBarGetProducts = () => setIsErrorGetProducts(false);

    // SnackBar for get Transactions
    const [isErrorGetTransactions, setIsErrorGetTransactions] = useState<boolean>(false);

    const onToggleSnackBarGetTransactions = () => setIsErrorGetTransactions(true);
    const closeSnackBarGetTransactions = () => setIsErrorGetTransactions(false);

    // SnackBar for OpenModal
    const [isErrorOpenModal, setIsErrorOpenModal] = useState<boolean>(false);

    const onToggleSnackBarOpenModal = () => setIsErrorOpenModal(true);
    const closeSnackBarOpenModal = () => setIsErrorOpenModal(false);

    // SnackBar for no Conection
    const [isErrorInternetConnection, setIsErrorInternetConnection] = useState<boolean>(false);

    const onToggleSnackBarInternetConnection = () => setIsErrorInternetConnection(true);
    const closeSnackBarInternetConnection = () => setIsErrorInternetConnection(false);

    // SnackBar for general errors
    const [isErrorGeneral, setIsErrorGeneral] = useState<boolean>(false);

    const onToggleSnackBarGeneral = () => setIsErrorGeneral(true);
    const closeSnackBarGeneral = () => setIsErrorGeneral(false);


    return [
        <SnackBarContext.Provider
            value={{

                isErrorGetProducts,
                setIsErrorGetProducts,
                onToggleSnackBarGetProducts,
                closeSnackBarGetProducts,

                isErrorGetTransactions,
                setIsErrorGetTransactions,
                onToggleSnackBarGetTransactions,
                closeSnackBarGetTransactions,

                isErrorOpenModal,
                setIsErrorOpenModal,
                onToggleSnackBarOpenModal,
                closeSnackBarOpenModal,

                isErrorInternetConnection,
                setIsErrorInternetConnection,
                onToggleSnackBarInternetConnection,
                closeSnackBarInternetConnection,

                isErrorGeneral,
                setIsErrorGeneral,
                onToggleSnackBarGeneral,
                closeSnackBarGeneral,
            }}
        >
            {children}
        </SnackBarContext.Provider>
    ];




}