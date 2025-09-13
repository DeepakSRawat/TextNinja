import { createContext } from "react";
import type { AlertType } from "../../types/types";

type AlertContextType = {
    alertMsg: AlertType | null;
    showAlert: (val:AlertType) => void;
}

export const AlertContext = createContext<AlertContextType | null>(null);