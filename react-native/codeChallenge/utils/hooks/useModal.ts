import { useContext } from "react";

//Type
import { ModalTypes } from "../types/ModalTyps";

//Type
import { ModalContext } from "@/context/modelContext";

export function useModalContext(): ModalTypes {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }

    return context;
}