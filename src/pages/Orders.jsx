import React from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";
import { useEffect } from "react";

// getorderedProduct

function Orders() {
  const dispatch = useDispatch();

  const orderState =
    useSelector((state) => state.auth?.getorderedProduct?.orders) || [];

  console.log(orderState);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <>
      <BreadCrumb title="My-Orders" />
      <Container class1={"cart-wrapper home-wrapper-2 py-5"}>
        <div className="row ">
          <div className="col-12 ">
            <div
              className="row p-3 rounded"
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
                <h5 className="m-0">Quantity</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">Total Amount</h5>
              </div>
              <div className="col-3 ">
                <h5 className="m-0">Total Amount After Discount</h5>
              </div>
              <div className="col-2 ">
                <h5 className="m-0">Status</h5>
              </div>
            </div>

            <div className="col-12 mt-3">
              {orderState &&
                orderState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="row my-3 p-2 rounded align-items-center"
                      style={{
                        backgroundColor: "#788595",
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      <div className="col-3">
                        <p className="m-0">{item?._id} </p>
                      </div>
                      <div className="col-2">
                        <p className="m-0">
                          {item?.orderItems[index]?.quantity}
                        </p>
                      </div>
                      <div className="col-2">
                        <p className=" m-0 fw-bolder">{item?.totalPrice}</p>
                      </div>
                      <div className="col-3">
                        <p className="m-0 fw-bolder">
                          {item?.totalPriceAfterDiscount}
                        </p>
                      </div>
                      <div className="col-2">
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
