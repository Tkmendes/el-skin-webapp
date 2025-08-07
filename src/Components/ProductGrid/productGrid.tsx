//import { DadosProduct } from "../DadosProduct/dadosProduct";
import styled from "styled-components";
import ProductCard from "../ProductCard/productCard"
import React, { useCallback, useEffect, useState } from "react";
import { IProduct } from "../ProductCard/productCard";
import axios from "axios";
// import { SearchContext } from "../../Context/searchContext";
// import { useCartContext } from "../../Context/cartModalContext";
import useSearch from "../Hooks/useSearch";
import { useCart } from "../Hooks/useCart";

const ProductGridSection = styled.section`
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

    const { term } = useSearch();
    const { addItem } = useCart();

    useEffect(() => {
        async function fetchItems() {

            const newItems = await axios.get<IProduct[]>('http://localhost:3001/products');
            setProduct(newItems.data);

        }
        fetchItems();
    }, [])

    useEffect(() => {
        if (term) {
            setFilteredProducts(products.filter(product =>
                product.name.toLowerCase().includes(term.toLowerCase()) ||
                product.description.toLowerCase().includes(term.toLowerCase())
            ));
        } else {
            setFilteredProducts(products);
        }
    }, [term, products])

    const handleProductClick = (productId: string) => {
        console.log(`Produto clicado: ${productId}`);
    };

    const handleBuyClick = useCallback((productId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        console.log(`Comprar produto: ${productId}`);

        const buyProduct = products.find((product) => product.id === productId);
        if (buyProduct) {
            addItem(buyProduct);
        }
        else {
            console.log(`Produto não encontrado: ${productId}`);
        }
    }, [products, addItem]);

    const title = "nossos queridinhos estão aqui";
    return (
        <ProductGridSection data-testid="product-grid">
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
        </ProductGridSection>


    );


}

export default ProductGrid