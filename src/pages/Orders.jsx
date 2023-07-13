import React, { useState } from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import { useEffect } from "react";

// getorderedProduct

function Orders() {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [itemNames, setItemNames] = useState([]);
  const orderState =
    useSelector((state) => state.auth?.getorderedProduct?.orders) || [];

  console.log(orderState);
  // console.log(orderState?.orderItems);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    let total = 0;
    let totalItems = 0;
    let itemNames = [];
    for (let index = 0; index < orderState?.length; index++) {
      const element = orderState[index];

      totalItems = totalItems + element.orderItems[index]?.quantity;
      total = total + element.orderItems[index]?.price;
      itemNames.push(element.orderItems[index]?.title);
      setTotal(total);
      setTotalItems(totalItems);
      setItemNames(itemNames);
    }
  }, [orderState]);

  console.log(total);
  console.log(totalItems);
  // console.log(itemNames);
  return (
    <>
      <BreadCrumb title="My-Orders" />
      <Container class1={"cart-wrapper home-wrapper-2 py-5"}>
        <div className="row ">
          <div className="col-12">
            <div
              className="order-header row p-xxl-3 pt-4 rounded col-12 ms-0"
              style={{
                borderBottom: "1px solid ",
                backgroundColor: "#ffd169",
                color: "#232f3e",
              }}
            >
              <div className="col-3 ">
                <h5 className="m-0">Order Id</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">Item</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">Quantity</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">Total Amount</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">
                  Total Amount <br /> After Discount
                </h5>
              </div>
              <div className="col-1">
                <h5 className="m-0">Status</h5>
              </div>
            </div>

            <div className="col-12 mt-3">
              {orderState &&
                orderState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="order-data row my-3 p-2 rounded align-items-center"
                      style={{
                        backgroundColor: "#293547",
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      <div className="col-3">
                        <p className="m-0 ">{item?._id} </p>
                      </div>
                      <div className="col-2">
                        <p className="m-0">
                          {item?.orderItems?.[index]?.product.title}
                        </p>
                      </div>
                      <div className="col-2">
                        <p className="m-0 ">
                          {item?.orderItems?.[index]?.product.quantity}
                        </p>
                      </div>
                      <div className="col-2">
                        <p className=" m-0 fw-bolder">{item?.totalPrice}</p>
                      </div>
                      <div className="col-2">
                        <p className="m-0 fw-bolder">
                          {item?.totalPriceAfterDiscount}
                        </p>
                      </div>
                      <div className="col-1">
                        <p
                          className=" m-0 fw-bolder"
                          style={{ color: "#3fff37" }}
                        >
                          {item?.orderStatus}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Orders;
