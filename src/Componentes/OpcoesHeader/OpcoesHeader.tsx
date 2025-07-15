import styled from "styled-components"

const Opcoes = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 96px;
    position: absolute;
    left: calc(50% - 631px/2 - 260.5px);
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
    
`
   

const textoOpcoes = ['Categorias', 'Tipo de pele', 'Necessidade', 'Ingredientes']

function OpcoesHeader(){
    return(
    <Opcoes>
          { textoOpcoes.map ( (texto)  => (
              <Opcao><p>{texto}</p></Opcao>
          ))}
        </Opcoes>
    );
}


export default OpcoesHeader