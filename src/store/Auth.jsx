import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const authenticatedToken = localStorage.getItem("token");
  const [cart, setCart] = useState(1);
  const [allProductsData, setAllProductsData] = useState();
  const [orders,setOrders] = useState();
const token = localStorage.getItem("token")
  const getAllProductsData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/services/allproducts`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = await response.json();
      setAllProductsData(resData.msg);
    } catch (error) {
      console.log(
        "Error occured while fetching the products Data",
        error.message
      );
    }
  };
  const getAllOrdersData = async ()=>{
    try {
      const response = await fetch(
        `http://localhost:8000/services/allorders`,
        {
          method:"GET",
        }
  
        
      );
      const resData = await response.json()
      setOrders(resData.msg);
    } catch (error) {
      console.log("An error occured while fetching the orders data",error)
    }
  }
  useEffect(() => {
    getAllProductsData();
    getAllOrdersData()
  }, []);
  return (
    <AuthContext.Provider
      value={{ cart, setCart,orders, authenticatedToken, token, allProductsData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    console.log("error");
    // throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};



 