import { useContext } from "react";
import { AlertContext } from "../context/AlertContext/useAlertContext";
import { ThemeContext } from "../context/themeContext/useThemeContext";

function Alert() {
  const alertMsg = useContext(AlertContext)?.alertMsg;
  const theme = useContext(ThemeContext)?.theme;
  
  const capitalize = (word:string) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
    <div style={{height:'50px', backgroundColor:theme === "dark"?"#0e1a2d": "white"}}>
      {alertMsg && <div className={`alert alert-${alertMsg.type} alert-dismissible fade show m-0`} role="alert">
        <strong>{capitalize(alertMsg.type)}</strong>: {alertMsg.msg}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>}
    </div>
  );
}

export default Alert;
