import Layout from "../../../components/Layout";
import {useRouter} from 'next/router';

export default function ClientePorCodigo(){
    const { query }  = useRouter();

    return(
        <Layout>
            <div>Código: {query.codigo}</div>
            <div>Filial: {query.filial}</div>
        </Layout>
    )
}