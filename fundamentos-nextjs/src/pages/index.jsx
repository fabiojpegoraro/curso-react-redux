import Navegador from "../components/Navegador";


export default function Inicio() {

    const codigo = 123;
    const filial = 'sp-02';
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador destino='/estiloso' texto='Estiloso'/>
            <Navegador destino='/exemplo' texto='Exemplo' cor='#9400d3'/>
            <Navegador destino='/jsx' texto='JSX' cor='crimson'/>
            <Navegador destino='/navegacao' texto='Navegação #01' cor='green' />
            <Navegador destino={`/cliente/${filial}/${codigo}`} texto='Navegação #02' cor='cornflowerblue' />
            <Navegador destino='/estado' texto='Componente com estado' cor='#601848'/>
            <Navegador destino='/integracao_1' texto='Integração com API #01' cor='#619177'/>
            <Navegador destino='/estatico' texto='Conteúdo Estático' cor='#619175'/>
        </div>
    )
}