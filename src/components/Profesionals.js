import React from "react";
import { useParams } from "react-router-dom";
import '../styles/Profesionals.css'

function Profesionals(){
    const {idProd} = useParams ()


    return(
        <>
        <div className="Profesionals_Top">
        <h1> Pagina en Construccion </h1>

        {/* <h2>Id del producto {idProd}</h2> */}
        </div>
        </>
    )
}

export default Profesionals

