export interface SnackBarProps {
    message: string | null;
    isVisible: boolean;
    closeFunction: () => void;
}