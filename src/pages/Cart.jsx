import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, getUserCart } from "../features/user/userSlice";
import newipad from "/newipad.jpg";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const userCartState = useSelector((state) => state.auth.cartProducts);

  console.log(userCartState);
  // console.log(userCartState.productID?.title);

  useEffect(() => {
    // dispatch(getUserCart());
    dispatch(getUserCart()); // get all cart data
  }, []);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    });
  };

  return (
    <>
      {/* Tab heading */}
      <Meta title={"Cart"} />
      {/* Home / Carts*/}
      <BreadCrumb title="Cart" />

      {/* <Checkout /> */}

      <section className="cart-wrapper home-wrapper-2 py-5'">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 mb-3 d-flex justify-contnet-between align-items-center">
                <h4 className="cart-col-1">Price</h4>
                <h4 className="cart-col-2">Product</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {userCartState &&
                userCartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 mb-3 d-flex justify-contnet-between align-items-center"
                    >
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-xxl-25 w-25">
                          <img src={newipad} className="img-fluid" alt="" />
                        </div>
                        <div className="w-xxl-75">
                          <p>{item?.productId?.title}</p>

                          <p className="d-flex gap-3">
                            Color :
                            <ul className="colors ps-0">
                              <li
                                style={{
                                  backgroundColor: item?.color?.title,
                                }}
                                className={`color-item`}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2"> $ {item?.price}</div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          {" "}
                          <TextField
                            sx={{ marginTop: 1, width: 100 }}
                            size="small"
                            id="outlined-number"
                            label="Qty"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{ inputProps: { min: 0, max: 10 } }}
                            onChange={(e) => setQuantity(e.target.value)}
                            value={item?.quantity}
                          />
                          {/* {item?.quantity} */}
                        </div>
                        <div>
                          <Tooltip title="Delete">
                            <IconButton>
                              <DeleteIcon
                                onClick={() => {
                                  deleteACartProduct(item?._id);
                                }}
                                color="error"
                              />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="cart-col-4">
                        ${item?.price * item?.quantity}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-basline">
                <div>
                  {" "}
                  <Link to="/product" className="button">
                    Continue to Shopping
                  </Link>
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <h4>SubTotal : $100</h4>
                  <p className="">Tax and Total Calculated at Checkout</p>
                  <div>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
