# Copilot Instructions for atividade-alura

Welcome to the **atividade-alura** codebase! This guide provides essential context and conventions to help AI coding agents contribute productively.

## Project Overview

- **Stack:** React (TypeScript), styled-components, Axios, Context API.
- **Purpose:** E-commerce product grid with search/filter functionality.
- **Key Directories:**
  - `src/Componentes/ProductGrid/`: Main product grid logic and styling.
  - `src/Componentes/ProductCard/`: Individual product card UI and logic.
  - `src/Context/`: Shared React contexts (e.g., search state).

## Architecture & Data Flow

- **Product Data:** Fetched from a REST API (`http://localhost:3001/products`) using Axios in `ProductGrid`.
- **State Management:** Uses React Context (`SearchContext`) for search/filter state, accessed via `useContext`.
- **Component Structure:**
  - `ProductGrid` fetches and filters products, renders a grid of `ProductCard` components.
  - `ProductCard` receives product data and click handlers as props.
- **Styling:** Uses `styled-components` for all component-level styles.

## Patterns & Conventions

- **TypeScript:** All components and data models are typed (see `IProduct` in `ProductCard`).
- **Async Data:** Always fetched in `useEffect` hooks; state updated via `useState`.
- **Event Handling:** Click handlers are passed as props and use event propagation control (see `handleBuyClick`).
- **Search Integration:** The `search` value from `SearchContext` is used to filter products before rendering (implement filtering logic if missing).
- **Component Naming:** PascalCase for components and styled-components.

## Developer Workflows

- **Start Dev Server:**  
  ```bash
  npm start
  ```
- **API Server:**  
  Ensure a local server is running at `http://localhost:3001/products` (e.g., with `json-server`).
- **Build:**  
  ```bash
  npm run build
  ```
- **Test:**  
  ```bash
  npm test
  ```

## Integration Points

- **External API:** All product data comes from the local API endpoint.
- **Context API:** Shared state (like search) is managed via React Context in `src/Context/searchContext.ts`.

## Example: Product Filtering

To filter products by search term:
```tsx
const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
```
Render `filteredProducts` instead of `products` in the grid.

## Key Files

- `src/Componentes/ProductGrid/productGrid.tsx` – Main grid logic, data fetching, and rendering.
- `src/Componentes/ProductCard/productCard.tsx` – Product card UI and click handling.
- `src/Context/searchContext.ts` – Search state context.

---

**Feedback:**  
If any section is unclear or missing important details, please specify so this guide can be improved!
