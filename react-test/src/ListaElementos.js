import React from "react";
import "./Estilos.css";


function ListaElementos (props){
    return(
        <ul className="ListaElementos">
            {props.children}
        </ul>
    );

}

export {ListaElementos};


