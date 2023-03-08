import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import Products from "./pages/Products/Products";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Bottoms from "./components/Bottoms/Bottoms";
import Catalog from "./components/Catalog/Catalog";
import Lookbook from "./components/Lookbook/Lookbook";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <FeaturedProducts />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "bottoms/products/:id",
        element: <Bottoms />,
      },
      {
        path: "catalog/products/:id",
        element: <Catalog />,
      },
      {
        path: "catalog/products/",
        element: <Lookbook />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
