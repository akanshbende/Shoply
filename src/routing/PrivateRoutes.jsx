import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));
  console.log(getTokenFromLocalStorage?.token);

  return getTokenFromLocalStorage?.token !== undefined ? (
    children
  ) : (
    <>
      {/* {toast.error("Login First !!")} */}
      {toast.error("Login First !!", {
        toastId: "success1",
      })}
      <Navigate to="/login" replace={true} />
    </>
  );
};
