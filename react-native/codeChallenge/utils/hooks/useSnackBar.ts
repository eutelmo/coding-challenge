import { useContext } from "react";

//Context
import { SnackBarContext } from "@/context/snackBarContext";

//Types
import { SnackBarTypes } from "../types/SnackBarContextProps";

export function useSnackBarContext(): SnackBarTypes {
    const context = useContext(SnackBarContext);
    if (!context) {
        throw new Error("useSnackBarContext must be used within a SnackBarProvider");
    }
    return context;
}