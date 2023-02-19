import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userSlice from "./../../redux/userSilce";
function Product({ product }) {
  const navigate = useNavigate();
  // Show Detail Product
  const dispatch = useDispatch();

  const addToCard = (product) => {
    dispatch(userSlice.actions.addToCart(product));
  };

  const handleShow = (product) => {
    navigate("../productDetail", { state: { product: product } });
  };
  return (
    <div className="border-2 p-3 rounded-md flex flex-col justify-between items-center">
      <div className="">
        <img
          onClick={() => handleShow(product)}
          className="w-52 h-52 object-cover cursor-pointer hover:opacity-80 duration-100"
          src={require(`./../../asset/image/${product.image01}`)}
          alt="#error"
        />
        <p
          onClick={() => handleShow(product)}
          className="text-sm hover:text-price duration-100 cursor-pointer"
        >
          {product.name}
        </p>
      </div>
      <div className="flex flex-col w-full">
        <p className="text-base text-price font-bold text-left ml-3 mb-3">
          {product.price}
        </p>
        <button
          onClick={() => addToCard(product)}
          className="px-5 py-2 bg-primary text-white rounded-sm float-left ml-3 hover:opacity-90"
        >
          Chọn Sản Phẩm
        </button>
      </div>
    </div>
  );
}

export default Product;
