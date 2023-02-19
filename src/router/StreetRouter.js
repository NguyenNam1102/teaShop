import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../page/home/Home";
import Cart from "../page/cart/Cart";
import Contract from "../page/contract/Contract";
import ProductDetail from "../page/productDetail/ProductDetail";
import Page404 from "../page/page404/Page404";
function StreetRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contract />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default StreetRouter;
