import styled from "styled-components";
import React from "react";


const ProductcardA = styled.a`
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
    border: 1px solid #f0f0f0;
    padding: 0;
    text-align: left;
    font-family: inherit;

    &::hover{
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    &::focus{
        outline: 2px solid #8B4A8B;
        outline-offset: 2px;
    }
`

const ProductImage = styled.div`
    width: 100%;
    height: 200px;
    background-color: #C8B99C;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .img{
        width: 100%;
        height: 100%;
        object-fit: cover;    
    }
`

const ProductInfo = styled.div`
    padding: 20px;
`

const ProductName = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0 0 8px 0;
    line-height: 1.3;
`

const ProductDescription = styled.p`
    font-size: 14px;
    color: #666;
    margin: 0 0 16px 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const ProductTags = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
`

 const ProductTag = styled.div`
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

  .protection{
    background-color: #E3F2FD;
    color: #1976D2;
  }
  .face{
    background-color: #FCE4EC;
    color: #C2185B;
  }
`

const ProductFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProductPrice = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #333;
`

const ProductBuyButton = styled.button` 
    background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: lowercase;

    &::hover{
        background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
    }
    
    &::active{
        transform: translateY(0);
    }
    
    &::focus{
        outline: 2px solid #8B4A8B;
        outline-offset: 2px;
    }
`

export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    src: string;
    
}

interface ProductCardProps {
    product: IProduct;
    onProductClick: (productId: string) => void;
    onBuyClick: (productId: string, event: React.MouseEvent) => void;
}
 
const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onProductClick,
    onBuyClick
}) => {
        const formatPrice = (price: number): string => {
            return `R$ ${price.toFixed(2).replace('.', ',')}`;
        };
        return(
            <ProductcardA onClick={() => onProductClick(product.id)}>
                <ProductImage>
                    <img src={product.src} alt={product.name}/>
                </ProductImage>
                <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>{product.description}</ProductDescription>

                    {/* <ProductTags>
                        {product.tags.map((tag) => (
                            <span 
                                key={`${product.id}-${tag.label}-${tag.type}`}
                                className={`product-tag product-tag--${tag.type}`}
                            >   
                        {tag.label}
                            </span>
                        ))}
                    </ProductTags> */}
                    <ProductFooter>
                        <ProductPrice>
                            {formatPrice(product.price)}
                        </ProductPrice>
                    <ProductBuyButton
                        onClick={(e) => onBuyClick(product.id, e)}
                        type="button">
                        comprar
                    </ProductBuyButton> 
                    </ProductFooter>

                </ProductInfo>

            </ProductcardA>
        )

    };


export default ProductCard;