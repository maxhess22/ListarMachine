import React from "react";
import "./Estilos.css";


function Buscador ({valorBusqueda, SetValorBusqueda}){
   
    const CambioValorBusqueda = (event) => {
        SetValorBusqueda(event.target.value);
    }
    return(
        <React.Fragment>
            <input   onChange={CambioValorBusqueda} className="buscador" />
        </React.Fragment>
    );
}
export {Buscador};