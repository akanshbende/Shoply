// export const base_url = "http://localhost:5000/api/";
export const base_url =
  "https://shoplybackend2-production-5875.up.railway.app/api/";

const customerData = localStorage.getItem("customer");
const getTokenFromLocalStorage = customerData ? JSON.parse(customerData) : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const token = localStorage.getItem("token");

// console.log(token);
// console.log(getTokenFromLocalStorage);
// console.log(getTokenFromLocalStorage.token);
