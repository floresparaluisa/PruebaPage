import { useState } from "react";
import "./css/principal.css"

export function Principal() {
    const [texto, setTexto] = useState("Hola")

    let principal = <div className="principal-text-content">
        <h5>{texto}</h5>
        <button onClick={() => {texto == "Hola" ? setTexto("Adios") : setTexto("Hola")}}>Precioname</button>  
    </div>

    return principal
}