
import styled from "styled-components"
import LogoHeader from "../Logo/logo"
import Pesquisa from "../Pesquisa/PesquisaContainer"
import OpcoesHeader from "../OpcoesHeader/OpcoesHeader"

const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 1rem; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
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


function HeaderComponents(){
        return(
          
            <HeaderContainer>
              <Container>
                
                <LogoHeader>
                  <LogoTxt>ALL SKIN</LogoTxt>
                </LogoHeader>
                <HeaderTop>
                <Pesquisa/>
                
                <OpcoesHeader/>
                </HeaderTop>
              </Container>
            </HeaderContainer>
         
        );

}


export default HeaderComponents