import styled from "styled-components";
import About1 from "../Imagens/about1.png"  
import About2 from "../Imagens/about2.png"
import About3 from "../Imagens/about3.png"

const AboutContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    font-family: 'Arial', sans-serif;
`
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
  align-items: start;
`

const AboutTextSection = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 40px;
    line-height: 1.2;
`

const AboutSection = styled.section` 
    margin-bottom: 40px;
`

const AboutSectionh2 = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`

const AboutSectionp = styled.p` 
    font-size: 1rem;
    line-height: 1.8;
    color: #666;
    margin: 0;
`

const AboutImagesSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const ProductImageContainer = styled.div`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover{
    transform: translateY(-5px);
    }
`

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
`

const ContactSection = styled.div`
    text-align: center;
    padding: 60px 40px;
    background-color: #f8f9fa;
    border-radius: 20px;
`

const ContactSectionh2 = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

const ContactSectionp = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
    line-height: 1.6;
`

const ContactButton = styled.button`
    background: linear-gradient(135deg, #8B5A96, #A67CB0);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 20px rgba(139, 90, 150, 0.3);

    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(139, 90, 150, 0.4);
    }
`

const ContactIcon = styled.span`
  font-size: 1.2rem;
`

export default function About(){
    return(
        <section>
            <AboutContainer>
                <AboutContent>
                    <AboutTextSection> Sobre a AL SKIN
                        <AboutSection>
                
                            <AboutSectionh2>QUEM SOMOS</AboutSectionh2>

                            <AboutSectionp>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            </AboutSectionp>
                        </AboutSection>
                        <AboutSection>
                            
                            <AboutSectionh2>Por que existimos?</AboutSectionh2>

                        
                            <AboutSectionp>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </AboutSectionp> 
                        </AboutSection>
                        <AboutSection>
                            <AboutSectionh2>O que a gente faz?</AboutSectionh2>
                            <AboutSectionp>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </AboutSectionp>
                        </AboutSection>
                        <ProductImageContainer>
                            <ProductImage src={About2}></ProductImage>
                        </ProductImageContainer>
                    </AboutTextSection>

                    <AboutImagesSection>
                        <ProductImageContainer>
                            <ProductImage src={About1}></ProductImage>
                        </ProductImageContainer>

                        <ContactSection>
                        <ContactSectionh2>Vamos Conversar?</ContactSectionh2>

                        <ContactSectionp>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</ContactSectionp>
                        <ContactButton>
                            <ContactIcon>💬</ContactIcon>
                            <ContactIcon>Fale conosco</ContactIcon>
                        </ContactButton>

                    </ContactSection>
                    </AboutImagesSection>

                    
                </AboutContent>
                <ProductImage src={About3}></ProductImage>
            </AboutContainer>

        </section>

    );
}

