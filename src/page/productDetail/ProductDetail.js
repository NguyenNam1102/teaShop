import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userSlice from "../../redux/userSilce";
import { useDispatch } from "react-redux";
function ProductDetail() {
  //   get product by params
  const {
    state: { product },
  } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(product.image01);

  const addToCard = (product) => {
    dispatch(userSlice.actions.addToCart(product));
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex gap-9 justify-center mt-8">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-[250px] h-[250px] object-cover mb-5"
            src={require(`./../../asset/image/${image}`)}
            alt="#error"
          />
          <div className="flex gap-5">
            <img
              onClick={() => setImage(product.image01)}
              className="w-[100px] h-[100px] object-cover"
              src={require(`./../../asset/image/${product.image01}`)}
              alt="#error"
            />

            <img
              onClick={() => setImage(product.image02)}
              className="w-[100px] h-[100px] object-cover"
              src={require(`./../../asset/image/${product.image02}`)}
              alt="#error"
            />
            <img
              onClick={() => setImage(product.image03)}
              className="w-[100px] h-[100px] object-cover"
              src={require(`./../../asset/image/${product.image03}`)}
              alt="#error"
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="text-left">
            <p className="text-xl font-bold text-primary mb-3">
              {product.name}
            </p>
            <p className="font-bold text-price">{product.price}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => addToCard(product)}
              className="px-5 py-2 bg-primary text-white rounded-sm hover:opacity-90"
            >
              Chọn Sản Phẩm
            </button>
            <button
              onClick={handleBack}
              className="px-5 py-2 bg-price text-white rounded-sm hover:opacity-90"
            >
              Trở lại{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-8"> */}
      <p className="my-8 w-[60%] m-auto text-left italic opacity-80">
        {product.desc}
      </p>
      {/* </div> */}
    </>
  );
}

export default ProductDetail;
