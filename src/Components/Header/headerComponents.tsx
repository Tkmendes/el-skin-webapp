
import styled from "styled-components"
import Logo from "../Logo/logo"
import Pesquisa from "../Pesquisa/PesquisaContainer"
import OpcoesHeader from "../OpcoesHeader/OpcoesHeader"
import CartButton from "../CartButton/cartButton"
import { Link } from "react-router-dom"


const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl}; 
  margin: 0 auto; 
  padding: 0 1rem; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0rem;
  }
`

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background.white}; 
  box-shadow: ${({ theme }) => theme.shadows.sm}; 
  
`

const HeaderTop = styled.div`
  padding: ${({ theme }) => theme.spacing.md}; 
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;

  }
`

const OpcoesContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
    margin-top: 0;
  }
`

function HeaderComponents() {
  return (

    <HeaderContainer>
      <HeaderTop>
        <Container>
          <Link style={{
            color: 'black',
            textDecoration: 'none',
          }} to={"/"}>
            <Logo />
          </Link>

          <Pesquisa />
          <CartButton />

          <OpcoesContainer>
            <OpcoesHeader />
          </OpcoesContainer>

        </Container>
      </HeaderTop>
    </HeaderContainer>

  );

}


export default HeaderComponents