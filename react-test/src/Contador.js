import React from "react";
import "./Estilos.css";


function Contador ({totales, completados}){
    return (
        <React.Fragment>
            <h2 className="Contador"> Has completado {completados} tarea de {totales} </h2>
        </React.Fragment>
    );
}

export {Contador};