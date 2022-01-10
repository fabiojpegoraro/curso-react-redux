import React from "react";

const aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Aleatorio(props) {
    return (    
        <div>
            O número é {aleatorio(props.min, props.max)}
        </div>
    );
};
