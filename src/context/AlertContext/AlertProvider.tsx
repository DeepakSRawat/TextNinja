import { useState, type ProviderProps } from "react";
import type { AlertType } from "../../types/types";
import { AlertContext } from "./useAlertContext";

const AlertProvider = ({children}:ProviderProps<unknown>) => {

    const [alertMsg, setAlertMsg] = useState<AlertType | null>(null);

    const showAlert = (val: AlertType) => {
		setAlertMsg({
			msg: val.msg,
			type: val.type,
		});
		setTimeout(() => {
			setAlertMsg(null);
		}, 3000);
	};
    return(
        <AlertContext.Provider value={{alertMsg, showAlert}}>{children}</AlertContext.Provider>
    )
}

export default AlertProvider;