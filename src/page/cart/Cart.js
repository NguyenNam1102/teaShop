import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import { getCart, getQuantity } from "./../../redux/selector";
import userSlice from "../../redux/userSilce";
import { useNavigate } from "react-router-dom";
import Checkout from "./../../components/checkout/checkout";

function Cart() {
  const [open, setOpen] = useState(false);
  const quantity = useSelector(getQuantity);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (result, cur) =>
      (result += parseFloat(cur.price.slice(0, -1)) * 1000 * cur.count),
    0
  );

  const removeProduct = (product) => {
    dispatch(userSlice.actions.removeProduct(product));
  };

  const continueShopping = () => {
    navigate("/");
  };

  const hanldeClose = () => {
    setOpen(false);
  };

  const hanldeOpen = () => {
    setOpen(true);
  };
  return (
    <div className="relative tablet:px-5 mobie:px-8 mobie:py-2">
      <div className="laptop:fixed laptop:top-[90px] laptop:right-6 laptop:max-w-[200px] tablet:text-white tablet:rounded-lg tablet:shadow-2xl tablet:bg-primary p-5 tablet:w-[30%] tablet:my-4 mobie:w-[100%] float-right">
        <p className="uppercase text-left">
          Tổng Tiền: <span className="font-bold">{totalPrice}đ</span>{" "}
        </p>
        <div className="flex mobie:flex-col">
          <button
            onClick={continueShopping}
            className="px-2 py-1 bg-price mobie:text-white mt-3  rounded-lg hover:opacity-80"
          >
            Mua thêm
          </button>
          {quantity > 0 ? (
            <button
              onClick={hanldeOpen}
              className="px-2 py-1 bg-price mobie:text-white mt-3 rounded-lg hover:opacity-80"
            >
              Thanh Toán
            </button>
          ) : (
            <button
              disabled
              className=" opacity-60 px-2 py-1 bg-price mobie:text-white mt-3 rounded-lg "
            >
              Thanh Toán
            </button>
          )}
        </div>
      </div>
      {quantity == 0 ? (
        <img
          className=" my-5 m-auto"
          src={require("./../../asset/image/empty-cart.png")}
          alt="#error"
        />
      ) : (
        <>
          <TableContainer
            className="laptop:max-w-[800px] m-auto my-10 medium:w-[750px] flex justify-start pl-5 mobie:w-auto"
            component={Paper}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell className="" align="left">
                    Image
                  </TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Count</TableCell>
                  <TableCell align="left">Cost</TableCell>
                  <TableCell align="left">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((each, index) => (
                  <TableRow
                    key={each.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell align="left">
                      <img
                        className="w-[75px] h-[75px] mobie:object-cover"
                        src={require(`./../../asset/image/${each.image01}`)}
                        alt=""
                      />
                    </TableCell>
                    <TableCell align="left">{each.name}</TableCell>
                    <TableCell align="left">{each.price}</TableCell>
                    <TableCell align="left">{each.count}</TableCell>
                    <TableCell align="left">
                      {parseFloat(each.price.slice(0, -1)) * 1000 * each.count}
                    </TableCell>
                    <TableCell align="left">
                      <button
                        onClick={() => removeProduct(each)}
                        className="px-5 py-1 bg-price text-white rounded-md"
                      >
                        Xóa
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Checkout open={open} handleClose={hanldeClose} />
        </>
      )}
    </div>
  );
}

export default Cart;
