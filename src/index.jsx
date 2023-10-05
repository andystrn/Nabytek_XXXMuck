import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';
import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage /> 
  }
]);

createRoot(
  document.querySelector('#app'),
).render(
  <RouterProvider router={router} />
);
