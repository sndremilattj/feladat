import { createContext, useContext } from "react"
//Ne kérdezd, ezt én sem értem
import styles from "../../../src/style.css"

export const SzinContext = createContext(null);

function Panel(szin){
    return(
        <>
        <div className="styles.fopanel">
        <h1>Fő panel</h1>
        <h1>Kiválasztott szín: {szin}</h1>
        </div>
        </>
    )
}

export default Panel