import styled from "styled-components"
import {faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
// import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';          
import Logo from "../Logo/logo";     

const FooterDiv = styled.footer`
    background-color: #f8f9fa;
    margin-top: 60px;    
`
const FooterContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`
const FooterSocial = styled.div`
    padding: 40px 0;
    
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    
`

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #6c757d;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 20px;

    &::hover{
        background-color: #8B4A8B;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
    }

    &::focus{
        background-color: #8B4A8B;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);   
    }
`

/* Links Section */
const FooterLinks = styled.div`
    background-color: #f8f9fa;
    padding: 50px 0;''
`

const FooterSections = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
`

const FooterSection = styled.section`
    text-align: left;
`

const FooterSectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    margin-top: 0;
`

const FooterSectionLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`


const FooterSectionLinksLi = styled.li `
    margin-bottom: 12px;
`

const FooterLink = styled.div` 
    background: none;
    border: none;
    color: #6c757d;
    font-size: 14px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: left;
    padding: 0;
    font-family: inherit;
    text-decoration: none;

    &::hover{
        color: #8B4A8B;
    }

    &::focus{
        outline: 2px solid #8B4A8B;
        outline-offset: 2px;
        border-radius: 2px;   
    }
`

/* Copyright Section */
const FooterBottom = styled.div`
    background-color: #333;
    color: white;
    padding: 30px 0;
    text-align: center;
`

const FooterBrandName = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: white;
`

const FooterCopyright = styled.div`
    font-size: 14px;
    margin: 0 0 8px 0;
    color: #adb5bd;
`

const FooterAddress = styled.div`
    font-size: 12px;
    margin: 0;
    color: #6c757d;
`
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionDados {
  title: string;
  links: FooterLink[];
}



const Footer: React.FC = () => {
    
    const footerSectionsDados: FooterSectionDados[] = [
    {
      title: 'Sobre a AL SKIN',
      links: [
        { label: '- quem somos', href: '/about' },
        { label: '- time AL SKIN', href: '/about' },
        { label: '- carreiras', href: '/about' }
      ]
    },
    {
      title: 'Loja AL SKIN',
      links: [
        { label: '- lojas físicas', href: '/lojas' },
        { label: '- devolução', href: '/devolucao' }
      ]
    },
    {
      title: 'Atendimento',
      links: [
        { label: '- oi@alskin.com.br', href: 'mailto:oi@alskin.com.br' },
        { label: '- ajuda', href: '/ajuda' }
      ]
    },
    {
      title: 'Blog AL SKIN',
      links: [
        { label: '- Minha pele', href: '/blog/minha-pele' },
        { label: '- Ingredientes', href: '/blog/ingredientes' }
      ]
    }
  ];
        return(
            <FooterDiv>
                <FooterContainer>
                    <FooterSocial>
                        <SocialIcons>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faInstagram}/></SocialIcon></a>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faFacebook}/></SocialIcon></a>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faYoutube}/></SocialIcon></a>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faPinterest}/></SocialIcon></a>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faTwitter}/></SocialIcon></a>
                            <a href=""><SocialIcon><FontAwesomeIcon icon={faLinkedin}/></SocialIcon></a>                   
                        </SocialIcons>

                    </FooterSocial> 
                    <FooterLink>
                        <FooterSections>
                            {footerSectionsDados.map((section)=>(
                                <FooterLinks>
                                    <FooterSection key={section.title}>
                                    
                                        <FooterSectionTitle>
                                            {section.title}
                                        </FooterSectionTitle>

                                    </FooterSection>
                                    <FooterSectionLinks>
                                    
                                        {section.links.map((link) => (
                                            <FooterSectionLinksLi key={link.label}>
                                                {link.label}
                                                
                                            </FooterSectionLinksLi>
                                            ))
                                        }
                                    
                                    </FooterSectionLinks>
                                </FooterLinks>                                   
                            ))
                            }   

                            
                        </FooterSections>
                    </FooterLink>

                </FooterContainer>
                <FooterBottom>
                    <FooterBrandName>
                        <Logo color="white"></Logo>
                    </FooterBrandName>
                    <FooterCopyright>
                        2023 AL SKIN. Todos os direitos reservados.
                    </FooterCopyright>
                    <FooterAddress>
                        Av. Sete de Setembro, 467 - São Paulo/SP - CEP: 05324-980
                    </FooterAddress>
                </FooterBottom>
            </FooterDiv>

        )


}

export default Footer