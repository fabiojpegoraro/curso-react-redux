import Layout from "../components/Layout";
import { useState } from "react";

export default function Estado() {

let [numero, setNumero] = useState(0);

    return(
        <Layout>
            <span>{numero}</span>
            <button onClick={() => setNumero(numero+=1)}>Incrementar</button>
        </Layout>
    )
}