# Product Comparison Widget

A product comparison widget built with React and TypeScript. Users can select up to 3 products and compare their specifications side-by-side in a table, with visual highlighting of rows where values differ.

## Setup

```bash
git clone https://github.com/akbarjorayev/anorbank-task
cd anorbank-task
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Features

- View a catalog of 12 hardcoded products (smartphones)
- Select up to 3 products for comparison
- Compare products in a table (characteristics as rows, products as columns)
- Rows where product values differ are highlighted with a yellow background
- Remove individual products from comparison
- Remove all products to see an empty state message
- Selection state persists after page refresh (localStorage)
- Responsive layout for mobile devices
- Disabled "Add to Compare" buttons when 3 products are already selected
- Hover effects on cards and table buttons

## Architectural Decisions

### Why localStorage?

The requirement was to keep comparison state after page refresh. localStorage is the simplest client-side persistence mechanism — no backend, no cookies, no URL params. It's synchronous, has a simple key-value API, and survives page reloads. The `useLocalStorage` hook wraps `localStorage.getItem` / `setItem` with React state, so the rest of the app uses a regular `useState`-like interface.

### Component structure

- **`App`** — root component, owns `selectedIds` state via the `useLocalStorage` hook, coordinates product list and comparison table
- **`ProductList`** — renders the grid of `ProductCard`s, passes down selection/disabling logic
- **`ProductCard`** — displays product info and a toggle button (Add/Remove)
- **`ComparisonTable`** — renders the comparison table with difference detection

## Acceptance Criteria Checklist

- [x] User can select products
- [x] Maximum 3 products can be compared
- [x] Comparison table updates automatically
- [x] Different rows are visually highlighted
- [x] Product can be removed
- [x] State survives page refresh
- [x] TypeScript types are used correctly
- [x] Components are reasonably separated
# anorbank-task
