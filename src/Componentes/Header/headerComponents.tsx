
import styled from "styled-components"
import Logo from "../Logo/logo"
import Pesquisa from "../Pesquisa/PesquisaContainer"
import OpcoesHeader from "../OpcoesHeader/OpcoesHeader"
import CartButton from "../CartButton/cartButton"


const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 1rem; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
`

const HeaderContainer = styled.header`
  background-color: #ffffff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  
`

const HeaderTop = styled.div`
  padding: 1rem 0; 
  border-bottom: 1px solid #e5e5e5;
`
const LogoTxt = styled.p`
  vertical-align: baseline;
  
`
const OpcoesContainer = styled.div`
  padding: 1rem 0;
  margin-top: 2.5rem;
`

function HeaderComponents(){
        return(
          
          <HeaderContainer>
              <HeaderTop>
                <Container>
                
                  <Logo/>
                      
                  
                  <Pesquisa/>
                  <CartButton/>

                  <OpcoesContainer>
                      <OpcoesHeader/>
                  </OpcoesContainer>

                </Container>
              </HeaderTop> 
          </HeaderContainer>
         
        );

}


export default HeaderComponents