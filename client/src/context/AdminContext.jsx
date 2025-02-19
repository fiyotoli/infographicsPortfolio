
import axios from "axios";

import { createContext, useState } from "react";
import toast from "react-hot-toast";


// Create the AdminContext
export const AdminContext = createContext(); 

export const AdminContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

   const backendUrl = import.meta.env.VITE_BACKEND_URL;


   const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/product/list`);
      if (data.success) {
        setProducts(data.products);  // Set products data in context
      } else {
        console.error(data.message);  // Handle error message
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };



  const value = {
    products, loading, fetchProducts,
    backendUrl
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
