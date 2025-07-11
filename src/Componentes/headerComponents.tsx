
import styled from "styled-components"
import LogoHeader from "./Logo/logo"

const HeaderContainer = styled.header`
  background-color: #ffffff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`

const HeaderTop = styled.div`
  padding: 1rem 0; 
  border-bottom: 1px solid #e5e5e5;
`


function HeaderComponents(){
        return(
            <HeaderContainer>
                <LogoHeader><p>ALL SKIN</p></LogoHeader>
                <HeaderTop></HeaderTop>
            </HeaderContainer>

        );

}


export default HeaderComponents