import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const calcFatorial = (number) => {
    const num = parseInt(number);
    if(num < 0) return -1;
    if(num === 0) return 1;

    // let result = num;
    
    // for(let i = num; i > 1; i--){
    //     result = (i - 1) * result;
    // }

    // return result;
    return calcFatorial(num - 1) * num;
}

const setStatus = (number) => {
    return number%2 === 0 ? 'Par' : 'Ímpar';
}

const UseEffect = (props) => {
    
    const [number, setNumber] = useState(1);
    const [parImpar, setParImpar] = useState(null);
    const [fatorial, setFatorial] = useState(1);

    useEffect(() => {
        setParImpar(setStatus(number));
    }, [number])

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" 
                    className="input" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{parImpar}</span>
            </div>
        </div>
    )
}

export default UseEffect
