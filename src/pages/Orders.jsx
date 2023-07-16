import React, { useState } from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
// import html2pdf from "html2pdf";

import { saveAs } from "file-saver";
import jsPDF from "jspdf";
// getorderedProduct

function Orders() {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [itemNames, setItemNames] = useState([]);
  const orderState =
    useSelector((state) => state.auth?.getorderedProduct?.orders) || [];
  console.log(orderState);
  console.log(orderState[0]?.orderStatus);
  console.log(orderState[0]?.orderItems);
  console.log(orderState[0]?.paidAt);
  console.log(orderState[0]?.totalPrice);
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

  console.log(orderState);
  console.log(totalItems);
  // console.log(itemNames)

  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("pdf-content").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <>
      <BreadCrumb title="My-Orders" />
      <Container class1={"cart-wrapper home-wrapper-2 py-3"}>
        <div className="row ">
          {orderState.length === 0 ? (
            <>
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <div>
                  <img src="\orders-empty.png" className="img-fluid" alt="" />
                </div>
                <h3>You Have'nt Ordered Yet...</h3>
              </div>
            </>
          ) : (
            <>
              {
                <div className="col-12 ps-3 mb-3 d-flex flex-wrap">
                  {orderState &&
                    orderState?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="order-card col-9 col-xxl-3 col-xl-3 col-md-6  ms-5  mt-3"
                        >
                          <div id="pdf-content">
                            <div className="order-card-top d-flex flex-column align-items-center">
                              <div className="top-icon">
                                <img
                                  src="/check_success.png"
                                  className="img-fluid "
                                  alt=""
                                  style={{ width: "80px" }}
                                />
                              </div>
                              <div className="top-text">
                                <h3>Order Success!</h3>
                              </div>
                            </div>
                            <div className="dotted-lines "></div>
                            <div className="order-card-bottom mt-3 d-flex flex-column ">
                              {console.log(orderState)}

                              <div className="bottom-data d-flex flex-column align-items-center justify-content-between">
                                <p className="d-flex align-items-center justify-content-between">
                                  <span className="col-6">Order ID</span>
                                  <span className="col-6 text-break w-50">
                                    {item?._id}
                                  </span>
                                </p>
                                <p className="d-flex align-items-center justify-content-between">
                                  <span>Quantity</span>
                                  <span>{orderState[0]?.quantity} 8</span>
                                </p>
                                <p className="d-flex align-items-center justify-content-between">
                                  <span>Time</span>
                                  <span>{item?.paidAt.slice(0, 10)}</span>
                                </p>
                                <p className="d-flex align-items-center justify-content-between">
                                  <span>Order Status</span>
                                  <span>{orderState[0]?.orderStatus}</span>
                                </p>
                              </div>
                              <div className="bottom-total d-flex align-items-center justify-content-between">
                                <span>Amount</span>
                                <span>₹ {item?.totalPrice}</span>
                              </div>
                            </div>
                            <div className="dotted-lines "></div>
                          </div>
                          <div className=" d-flex  align-items-center justify-content-center">
                            <div
                              className="bottom-pdf button w-50 p-2"
                              onClick={Print}
                            >
                              Download PDF
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* <div className="pagination">
                <Pagination  count={10} color="primary" />
              </div> */}
                </div>
              }
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default Orders;

{
  /* <div>
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
                          <p className="d-flex align-items-center justify-content-between" className="m-0 ">{item?._id} </p>
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
            </div> */
}
