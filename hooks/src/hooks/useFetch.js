import { useEffect, useState } from "react";


export const useFetch = (url, method = 'get') => {
    
    const [response, setResponse] = useState({
        data: null,
        loading: true}
    )

    console.log('entrou no usefetch');

    useEffect(() => {
        console.log('entrou no effect');
        fetch(url, {method})
            .then(response => response.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }));
    }, [url, method]);

    console.log(response.data);

    return response;

}

//fetch('http://files.cod3r.com.br/curso-react/estados.json').then(response => response.json()).then(json => console.log(json));