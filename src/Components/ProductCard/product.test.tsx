import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard, { IProduct } from "./productCard";

const product: IProduct = {
  "id": '1',
  "name": "Produto teste",
  "description": "Creme nutritivo para hidratação profunda da pele do rosto, com extrato de aloe vera.",
  "price": 45.99,
  "image": "/prod1.jpg",
  "tags": [
    { "label": "face", "id": 1, "type": "face" },
  ],
  "quantity": 1
};

const onProductClick = jest.fn();
const onBuyClick = jest.fn();

const setup = () => {
  render(
    <ProductCard
      key={product.id}
      product={product}
      onProductClick={onProductClick}
      onBuyClick={onBuyClick}
    />
  );
};
describe('Testando Product Card', () => {
  test('renders product card', async () => {
    setup();
    const productCard = await screen.findByTestId("product-card");
    expect(productCard).toBeInTheDocument();

    expect(screen.getByText("Produto teste")).toBeInTheDocument();

  });
});

describe('Testando interações do Product Card', () => {
  test('chama onProductClick ao clicar no card', async () => {
    setup();
    const productCard = await screen.findByTestId("product-card");
    fireEvent.click(productCard);
    expect(onProductClick).toHaveBeenCalledWith('1');
    expect(onProductClick).toHaveBeenCalledTimes(1);
  });

  test('chama onBuyClick ao clicar no botão de comprar', async () => {
    setup();
    const buyButton = await screen.findByRole("button", { name: /comprar/i });
    fireEvent.click(buyButton);
    expect(onBuyClick).toHaveBeenCalledWith('1', expect.anything());
    expect(onBuyClick).toHaveBeenCalledTimes(1);
  });
});
