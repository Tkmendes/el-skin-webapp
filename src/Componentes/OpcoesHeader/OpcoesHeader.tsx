import { Link } from "react-router-dom";
import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8rem;
    position: absolute;
    left: calc(48% - 631px/2 - 260.5px);
    margin: 0px;
`
const Opcao = styled.li`
    font-size: 14px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    list-style: none;
    font-weight: bold;
    
`


const textoOpcoes = [{ nome: 'Categorias', src: '/categorias' }, { nome: 'Tipo de pele', src: '/tipo' }, { nome: 'Necessidade', src: '/necessidade' }, { nome: 'Ingredientes', src: '/ingredientes' }]

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={texto.src} key={texto.nome} style={{
                    color: 'black',
                    textDecoration: 'none',
                }}>
                    <Opcao><p>{texto.nome}</p></Opcao>
                </Link>
            ))}
            <Opcao><p style={{ color: 'red' }}>Kits até 50% OFF</p></Opcao>
        </Opcoes>
    );
}


export default OpcoesHeader