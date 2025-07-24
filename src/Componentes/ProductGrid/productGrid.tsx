//import { DadosProduct } from "../DadosProduct/dadosProduct";
import styled from "styled-components";
import ProductCard from "../ProductCard/productCard"
import React, { useContext, useEffect, useState } from "react";
import { IProduct } from "../ProductCard/productCard";
import axios from "axios";
import { SearchContext } from "../../Context/searchContext";

const ProductGriSection = styled.section`
    padding: 60px 20px;
    background-color: #ffffff;
`
const ProductGridContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const ProductGridTitle = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 40px;
    font-family: 'Arial', sans-serif;
`

const ProductGridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    justify-items: center;
`



function ProductGrid() {
    //const products = DadosProduct;
    const [products, setProduct] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    const { search }  = useContext(SearchContext);

    useEffect(() => {
        async function fetchItems() {

            const newItems = await axios.get<IProduct[]>('http://localhost:3001/products');
            setProduct(newItems.data);

        }
        fetchItems();
    }, [])

    useEffect(()=> {
        if(search){
            setFilteredProducts(products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
            ));
        }else{
            setFilteredProducts(products);
        }
    }, [search, products])

    const handleProductClick = (productId: string) => {
        console.log(`Produto clicado: ${productId}`);
    };

    const handleBuyClick = (productId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        console.log(`Comprar produto: ${productId}`);
    };

    const title = "nossos queridinhos estão aqui";
    return (
        <ProductGriSection>
            <ProductGridContainer>
                <ProductGridTitle>{title}</ProductGridTitle>
                <ProductGridDiv>
                    {filteredProducts.map((product) => (
                        
                        <ProductCard
                            key={product.id}
                            product={product}
                            onProductClick={handleProductClick}
                            onBuyClick={handleBuyClick}
                        />
                    ))}

                </ProductGridDiv>
            </ProductGridContainer>
        </ProductGriSection>


    );


}

export default ProductGrid