import React from "react";
import "./Estilos.css";


function ButtonCrear (){
    return (
        <React.Fragment>
            <button className="ButtonCrear"
            
             onClick={ 
                () => console.log("click")
             }
            >
                +
            </button>
        </React.Fragment>
    );
}

export {ButtonCrear};