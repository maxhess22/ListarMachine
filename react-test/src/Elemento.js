import React from "react";
import "./Estilos.css";




     



function Elemento(props) {
    return(
        <React.Fragment>
               <li className={ `Elemento ${props.completar&&'Elemento_completado'}`}>
                <button className="Complete" ><svg onClick={props.Completado}id="Completado" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="50px" height="50px"><path d="M 28.796875 6.1347656 A 1.0001 1.0001 0 0 0 28.257812 6.2929688 C 22.174649 10.08797 17.189059 15.185127 13.029297 21.216797 C 10.925384 18.33288 8.5825295 15.811668 5.7167969 14.136719 A 1.0001 1.0001 0 1 0 4.7089844 15.863281 C 7.5979308 17.551798 10.05178 20.18558 12.244141 23.419922 A 1.0001 1.0001 0 0 0 13.90625 23.408203 C 18.081279 17.074764 23.131242 11.848869 29.316406 7.9902344 A 1.0001 1.0001 0 0 0 28.796875 6.1347656 z"/></svg></button>
                <p>{props.text}</p>
                <button className= "Delete" onClick={props.Eliminar}>X</button>
            </li>
        </React.Fragment>
     
    );
}

export {Elemento};