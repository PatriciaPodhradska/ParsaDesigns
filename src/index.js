import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loader from './Components/Loader';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Components/Error';
import './index.css';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./i18n";

import reportWebVitals from './reportWebVitals';



function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: async () => {return <Loader />},
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />
        // loader: async () => {return <Loader />},
      },
      {
        path: "/portfolio",
        element: <Portfolio />
        // loader: async () => {return <Loader />},
      },
      {
        path: "/contact",
        element: <Contact />
        // loader: async () => {return <Loader />},
      },
      {
        path: "/about",
        element: <About />
        // loader: async () => {return <Loader />},
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
