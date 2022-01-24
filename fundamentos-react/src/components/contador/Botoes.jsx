import React from "react";

export default (props) => {

    return(
        <>
        <button onClick={props.setInc}>+</button>
        <button onClick={props.setDec}>-</button>
        </>
    );
};