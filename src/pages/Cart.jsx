import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";
import newipad from "/newipad.jpg";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);

  const userCartState = useSelector((state) => state?.auth?.cartProducts) || [];
  // const userCartInitial =
  // useSelector((state) => state?.auth?.cartProduct) || [];
  // console.log(userCartInitial);
  console.log(userCartState);
  // console.log(userCartState[0]?.productId.images[0]);
  // const userCart = useSelector((state) => state.auth.cartProducts);

  const customerData = localStorage.getItem("customer");
  const getTokenFromLocalStorage = customerData
    ? JSON.parse(customerData)
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    // dispatch(getUserCart());
    dispatch(getUserCart(config2)); // get all cart prosucts
  }, []);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );

      setTimeout(() => {
        dispatch(getUserCart(config2));
      }, 200);
    }
  }, [productUpdateDetail]);

  const deleteACartProduct = (id) => {
    const idNew = id;
    const configNew = config2;
    dispatch(deleteCartProduct({ idNew, configNew }));
    setTimeout(() => {
      dispatch(getUserCart(configNew));
    }, 200);
    // console.log(idNew);
    // console.log(configNew);
  };
  console.log(userCartState);
  // console.log(userCartState.images);
  useEffect(() => {
    let sum = 0;

    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;

      setTotalAmount(sum);
    }
  }, [userCartState]);

  return (
    <>
      {/* Tab heading */}
      <Meta title={"Cart"} />
      {/* Home / Carts*/}
      <BreadCrumb title="Cart" />

      {/* <Checkout /> */}

      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          {userCartState?.length === 0 && (
            <div className="d-flex flex-wrap align-items-center gap-5 justify-content-center">
              <img
                src="public\emptycart.webp"
                // width={400}
                alt=""
                className="col-12 col-xxl-6"
              />
              <h1> Your Cart is Empty</h1>
            </div>
          )}
          <div className="row">
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div key={index} className="col-12">
                    <div className="cart-header py-3 mb-3 d-flex justify-contnet-between align-items-center">
                      <h4 className="cart-col-1">Price</h4>
                      <h4 className="cart-col-2">Product</h4>
                      <h4 className="cart-col-3">Quantity</h4>
                      <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-3 d-flex justify-contnet-between align-items-center">
                      <div className="cart-col-1 gap-15 d-flex align-items-center">
                        <div className="w-xxl-25 w-25">
                          <img
                            src={item.productId.images[0]}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div className="w-xxl-75 ">
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
                          {/* {console.log(productUpdateDetail?.quantity)} */}
                          <TextField
                            sx={{ marginTop: 1, width: 100 }}
                            size="small"
                            id={"cart" + item?._id}
                            label="Qty"
                            type="number"
                            name={"quantity" + item?._id}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            InputProps={{ inputProps: { min: 0, max: 10 } }}
                            value={item?.quantity}
                            onChange={(e) =>
                              setProductUpdateDetail({
                                cartItemId: item?._id,
                                quantity: e.target.value,
                              })
                            }
                          />
                          {/* {console.log(cartItemId)} */}
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
                  </div>
                );
              })}
            {userCartState?.length !== 0 && (
              <div className="col-12 py-2">
                <div className="d-flex justify-content-between align-items-basline">
                  <div>
                    <Link to="/product" className="button">
                      Continue to Shopping
                    </Link>
                  </div>

                  <div className="d-flex flex-column justify-content-end">
                    <h4>SubTotal : {totalAmount}</h4>
                    <p className="">Tax and Total Calculated at Checkout</p>
                    <div>
                      <Link to="/checkout" className="button">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
