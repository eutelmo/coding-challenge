export interface SnackBarTypes {
    isErrorGetProducts: boolean;
    setIsErrorGetProducts: (state: boolean) => void;
    onToggleSnackBarGetProducts: () => void;
    closeSnackBarGetProducts: () => void;

    isErrorGetTransactions: boolean;
    setIsErrorGetTransactions: (state: boolean) => void;
    onToggleSnackBarGetTransactions: () => void;
    closeSnackBarGetTransactions: () => void;

    isErrorOpenModal: boolean;
    setIsErrorOpenModal: (state: boolean) => void;
    onToggleSnackBarOpenModal: () => void;
    closeSnackBarOpenModal: () => void;

    isErrorInternetConnection: boolean;
    setIsErrorInternetConnection: (state: boolean) => void;
    onToggleSnackBarInternetConnection: () => void;
    closeSnackBarInternetConnection: () => void;

    isErrorGeneral: boolean;
    setIsErrorGeneral: (state: boolean) => void;
    onToggleSnackBarGeneral: () => void;
    closeSnackBarGeneral: () => void;
}
