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

     @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {

        font-size: 10px;
        max-width: 768px;
        gap: 0.5rem;
        align-items: center;
        display: contents;

        
    }
`
const Opcao = styled.li`
    font-size: 14px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 0.5 rem;
    list-style: none;
    font-weight: bold;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {

        font-size: 10px;
        max-width: 768px;
        gap: 0.5rem;
    }
    
`

const Kitp = styled.p`
    color: red;
    margin-left: 9.5rem;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-left: 0;
    }
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
            <Opcao><Kitp>Kits até 50% OFF</Kitp></Opcao>
        </Opcoes>
    );
}


export default OpcoesHeader