
import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from "react";
//import { dadosBanner } from "../DadosBanner/dadosBanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const BannerSection = styled.section`
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
     background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, transparent 60%),
              linear-gradient(45deg, #f8f6f3 0%, #e8e4e0 100%);
    background-image: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`
const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
`
const CarouselContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 1000px;
`
const CarouselNavButton = styled.button`
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &::hover{
        background: rgba(255, 255, 255, 0.3);
        transform: translateX(-2px);
    }
`
const CarouselText = styled.div`
    flex: 1;  
    text-align: left;  
`

const CarouselSubtitle = styled.span`
    display: block;
    font-size: 16px;
    color: #8B4A8B;
    margin-bottom: 8px;
    font-weight: 400;
    letter-spacing: 0.5px;
    
`
const CarouselTitle = styled.h1`
    font-size: 64px;
    font-weight: 700;
    color: #8B4A8B;
    margin: 0;
    margin-bottom: 16px;
    line-height: 1.1;
    text-shadow: 2px 2px 4px rgba(139, 74, 139, 0.1);
`

const CarouselDescription = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 32px;
    line-height: 1.5;
    max-width: 400px;
`

const CarouselCtaButton = styled.button`
    background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 32px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
     gap: 8px;
    box-shadow: 0 4px 16px rgba(139, 74, 139, 0.3);
    text-transform: lowercase;

    &::hover{
        background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(139, 74, 139, 0.4);
    }
    
    &::active{
        transform: translateY(0);
    }
`
interface ICarouselItem {
    id: number;
    subtitle: string;
    title: string;
    description: string;
    Image: string;
}

function BannerContainer() {
    const [idxItemAtual, setIdxItemAtual] = useState(0);

    const [items, setItems] = useState<ICarouselItem[]>([]);

    useEffect(() => {
        async function fetchItems() {

            const newItems = await axios.get<ICarouselItem[]>('http://localhost:3001/carousel');
            setItems(newItems.data);

        }
        // catch(erro){
        //      console.log(error);
        //     }
        //}    
        // axios.get('http://localhost:3001/carousel')
        //     .then(resposta => {
        //         console.log(resposta.data[0].description)
        //         setItems(resposta.data)
        //     })
        //     .catch(erro => {
        //         console.log(erro)})
        fetchItems();
    }, [])

    function previousItem() {
        setIdxItemAtual((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
    }

    function nextItem() {
        setIdxItemAtual((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setIdxItemAtual(prevIdxItemAtual => {
                return (prevIdxItemAtual + 1) % items.length;
            });
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, [items]);


    return (
        <>
            {items.length === 0 && <h6>Carregando...</h6>}
            {items.length > 0 &&

                <BannerSection style={{ backgroundImage: `url('${items[idxItemAtual].Image}')` }}>
                    <CarouselContainer>
                        <CarouselContent>
                            <CarouselNavButton aria-label="Voltar" onClick={previousItem}>
                                <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
                            </CarouselNavButton>
                            <CarouselText>
                                <CarouselSubtitle>
                                    {items[idxItemAtual].subtitle}
                                </CarouselSubtitle>
                                <CarouselTitle>
                                    {items[idxItemAtual].title}
                                </CarouselTitle>
                                <CarouselDescription>
                                    {items[idxItemAtual].description}
                                </CarouselDescription>
                                <CarouselCtaButton>
                                    comprar agora
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </CarouselCtaButton>
                            </CarouselText>

                            <CarouselNavButton aria-label="Próximo" onClick={nextItem}>
                                <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
                            </CarouselNavButton>
                        </CarouselContent>
                    </CarouselContainer>


                </BannerSection>
            }
        </>


    )


}


export default BannerContainer