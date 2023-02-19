import React from "react";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../../redux/userSilce";
import { getCart, getQuantity } from "./../../redux/selector";
import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
function SidebarCart({ open, handleClose }) {
  const cart = useSelector(getCart);
  const quantity = useSelector(getQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCard = (product) => {
    dispatch(userSlice.actions.addToCart(product));
  };
  const subProduct = (product) => {
    dispatch(userSlice.actions.subProduct(product));
  };

  const totolPrice = cart.reduce(
    (result, cur) =>
      (result += parseFloat(cur.price.slice(0, -1)) * 1000 * cur.count),
    0
  );

  const handleClick = () => {
    handleClose();
    navigate("./cart");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="laptop:w-[30%] h-full bg-white float-right border-none overflow-y-scroll pb-7 medium:w-[40%] tablet:w-[50%] mobie:w-[100%] mobie:pb-14">
          <HighlightOffIcon
            onClick={handleClose}
            className="absolute right-5 top-5 cursor-pointer"
          />

          {quantity > 0 ? (
            <div className="mt-[42px]">
              {cart?.map((item) => (
                <div key={item.id} className="mb-4 flex border-b-4">
                  <img
                    className="laptop:w-[100px] laptop:h-[100px] medium:w-[130px] medium:h-[130px] tablet:w-[150px] tablet:h-[150px] mobie:w-[180px] mobie:h-[180px]"
                    src={require(`./../../asset/image/${item.image01}`)}
                    alt="#error"
                  />
                  <div>
                    <p className="">{item.name}</p>
                    <p className="mt-4">
                      <span
                        onClick={() => addToCard(item)}
                        className="cursor-pointer rounded-sm bg-primary inline-block w-4 h-7 text-center text-white mr-4"
                      >
                        +
                      </span>
                      {item.count}
                      <span
                        onClick={() => subProduct(item)}
                        className="cursor-pointer rounded-sm bg-primary inline-block w-4 h-7 text-center text-white ml-4"
                      >
                        -
                      </span>
                    </p>
                    <p>
                      Price :{" "}
                      {parseFloat(item.price.slice(0, -1)) *
                        1000 *
                        parseInt(item.count)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex justify-center">
              <p className="mr-3">Giỏ hàng của bạn đang trống</p>
              <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
            </div>
          )}

          <div className="laptop:w-[30%] medium:w-[40%] tablet:w-[50%] mobie:w-[100%] absolute bottom-0 py-4 px-10 bg-primary text-white flex items-center justify-around">
            <p>Tổng Phí: {totolPrice} Đ</p>
            <button
              onClick={handleClick}
              className="py-2 px-3 border-2 border-price rounded hover:opacity-90"
            >
              Checkout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SidebarCart;
