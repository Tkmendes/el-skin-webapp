import styled from "styled-components";


const LogoHeader = styled.div`
    font-size: 24px; 
    font-weight: bold;
    color: ${props => props.color ? 'white' : 'black'}
    margin: 0; 
    letter-spacing: 0.5px; 
    font-family: Shippori Antique;
    
    
`


const LogoTxt = styled.p`
  vertical-align: baseline;
  
`
function Logo(props){
    return(
        
            <LogoHeader>
                <LogoTxt>ALL SKIN</LogoTxt>    
            </LogoHeader>

    )
}



export default Logo;