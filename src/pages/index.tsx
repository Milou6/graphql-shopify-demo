import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "./HomePage";
import SingleProductPage from "./SingleProductPage";
import SearchPage from "./search";
import CartPage from "./CartPage";

export default function Pages() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<SingleProductPage />} path="/product/:productId" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<CartPage />} path="/cart" />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}
