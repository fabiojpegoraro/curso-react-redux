import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const merge = (s1, s2) => {
    // const arrays1 = Array.from(s1);
    // const arrays2 = Array.from(s2);
    // const sizeArrays = arrays1.length + arrays2.length;

    // const resultado = [];

    // for(let i = 0; i < sizeArrays; i++){
    //     resultado.push(arrays1[i]);
    //     resultado.push(arrays2[i]);
    //     }

    // return resultado;

    return [...s1].map((w, i) => `${w}${s2[i] || ""}`);
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const count = useRef(0);
    const input1 = useRef(null);
    const input2 = useRef(null);

    useEffect(() => {
        count.current++;
        input2.current.focus();
    },[value1])

    useEffect(() => {
        count.current++;
        input1.current.focus();
    },[value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className='center'>
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)}</span>
                    <span className="text">[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1} 
                    onChange={e => setValue1(e.target.value)}
                    ref={input1}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div>
                <input 
                    type="text" 
                    className="input" 
                    value={value2} 
                    onChange={e => setValue2(e.target.value)}
                    ref={input2}
                />
            </div>
        </div>
    )
}

export default UseRef
