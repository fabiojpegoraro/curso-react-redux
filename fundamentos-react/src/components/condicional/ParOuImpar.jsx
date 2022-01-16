import React from "react";

export default (props) => {

    const par = (numero) => numero % 2 === 0 ? 'Par' : 'Ímpar';

    return(
            <div>
            <table>
                {props.numeros.map((numero) => {
                    return(                    
                        <tr>
                            <td>{numero}</td>
                            <td>{par(numero)}</td>
                        </tr>
                    )
                }
                )}        
            </table>
        </div>
    )
}