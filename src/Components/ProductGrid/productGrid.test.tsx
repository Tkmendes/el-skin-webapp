import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import ProductGrid from "./productGrid";
// import { SearchContext } from '../../Context/searchContext';
// import { useCartContext, } from '../../Context/cartModalContext';
import { IProduct } from '../ProductCard/productCard';
import { useCart } from "../Hooks/useCart"
import useSearch from '../Hooks/useSearch';

// 1. Mock do Axios para evitar chamadas de rede reais nos testes.
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// 2. Mock do componente filho (ProductCard) para simplificar os testes do ProductGrid.
//    Isso nos permite focar na lógica do ProductGrid sem nos preocuparmos com a implementação do ProductCard.
jest.mock('../ProductCard/productCard', () => {
    return ({ product, onBuyClick }: { product: IProduct, onBuyClick: (id: string, e: React.MouseEvent) => void }) => (
        <div data-testid={`product-${product.id}`}>
            <span>{product.name}</span>
            <button aria-label={`Comprar ${product.name}`} onClick={(e) => onBuyClick(product.id, e)}>
                Comprar
            </button>
        </div>
    );
});

// 3. Mock do hook `useCart` para fornecer uma função `addItem` controlável.
jest.mock("../Hooks/useCart", () => ({
    useCart: jest.fn(),
}));
const mockedUseCart = useCart as jest.Mock;

// Mock do hook useSearch
jest.mock('../Hooks/useSearch');
const mockedUseSearch = useSearch as jest.Mock;

// Dados de produtos que usaremos nos testes.
const mockProducts: IProduct[] = [
    {
        id: '1',
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 100,
        image: '/prod1.jpg',
        tags: [
            { label: 'face', id: 1, type: 'face' },
        ],
        quantity: 1
    },
    {
        id: '2',
        name: 'Produto 2',
        description: 'Descrição do Produto 2',
        price: 100,
        image: '/prod1.jpg',
        tags: [
            { label: 'face', id: 1, type: 'face' },
        ],
        quantity: 1
    },
    {
        id: '3',
        name: 'Item 3',
        description: 'Descrição do Item 3 com palavra-chave',
        price: 300,
        image: 'urlC',
        tags: [{ label: 'face', id: 1, type: 'face' }],
        quantity: 1
    },
];

describe('ProductGrid Component', () => {

    let mockAddItem: jest.Mock;

    // beforeEach é executado antes de cada teste.
    beforeEach(() => {
        // Reseta o mock da chamada de API para resolver com nossos produtos mockados.
        mockedAxios.get.mockResolvedValue({ data: mockProducts });

        // Cria uma função de mock nova para `addItem` a cada teste.
        mockAddItem = jest.fn();
        mockedUseCart.mockReturnValue({
            addItem: mockAddItem,
        });
        mockedUseSearch.mockReturnValue({
            term: '',
        });
    });

    // afterEach é executado após cada teste para limpar os mocks.
    afterEach(() => {
        jest.clearAllMocks();
    });

    // =================================================================
    // Teste 1: Renderização e busca de dados
    // =================================================================
    test('deve renderizar e buscar produtos ao montar', async () => {
        render(
            <ProductGrid />
        );

        // Verifica se o título é renderizado
        expect(screen.getByText(/nossos queridinhos estão aqui/i)).toBeInTheDocument();

        // Espera a chamada assíncrona do axios terminar e os produtos serem renderizados
        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
            expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/products');
        });

        // Verifica se todos os produtos mockados estão na tela
        expect(await screen.findByText('Produto 1')).toBeInTheDocument();
        expect(await screen.findByText('Produto 2')).toBeInTheDocument();
        expect(await screen.findByText('Item 3')).toBeInTheDocument();
    });

    // =================================================================
    // Teste 2: Filtragem de produtos
    // =================================================================
    test('deve filtrar produtos com base no contexto de busca', async () => {
        mockedUseSearch.mockReturnValue({
            term: 'Produto',
        });
        render(
            <ProductGrid />
        );

        // Espera a renderização inicial
        await waitFor(() => {
            expect(screen.getByText('Produto 1')).toBeInTheDocument();
        });

        // Verifica se os produtos que correspondem ao filtro estão na tela
        expect(screen.getByText('Produto 1')).toBeInTheDocument();
        expect(screen.getByText('Produto 2')).toBeInTheDocument();

        // Verifica se o produto que não corresponde ao filtro não está na tela
        // `queryByText` retorna null se não encontrar, evitando que o teste falhe.
        expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
    });

    // =================================================================
    // Teste 3: Filtro sem resultados
    // =================================================================
    test('deve exibir nada quando o filtro de busca não tiver correspondências', async () => {
        render(
            <ProductGrid />
        );

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });

        // Verifica que nenhum dos produtos foi renderizado
        expect(screen.queryByText('Produto 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Produto 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 3')).not.toBeInTheDocument();
    });

    // =================================================================
    // Teste 4: Interação do botão "Comprar"
    // =================================================================
    test('deve chamar addItem do contexto de carrinho quando o botão comprar for clicado', async () => {
        render(
            <ProductGrid />
        );

        // Espera os produtos serem renderizados
        await waitFor(() => {
            expect(screen.getByText('Produto 2')).toBeInTheDocument();
        });

        // Encontra o botão de comprar específico do "Produto 2" (graças ao mock do ProductCard)
        const buyButton = screen.getByRole('button', { name: /comprar produto 2/i });
        fireEvent.click(buyButton);

        // Verifica se a função `addItem` foi chamada
        expect(mockAddItem).toHaveBeenCalledTimes(1);

        // Verifica se `addItem` foi chamada com o objeto de produto correto
        expect(mockAddItem).toHaveBeenCalledWith(mockProducts[1]); // mockProducts[1] é o "Produto 2"
    });
});