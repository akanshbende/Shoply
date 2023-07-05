export const base_url = "http://localhost:5000/api/";

const customerData = localStorage.getItem("customer");
const getTokenFromLocalStorage = customerData ? JSON.parse(customerData) : null;

const token = localStorage.getItem("token");

// console.log(token);
// console.log(getTokenFromLocalStorage);
// console.log(getTokenFromLocalStorage.token);

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
