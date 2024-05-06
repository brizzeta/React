import React, { createContext, useContext, useState } from 'react'

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const initialProducts = [
      {
        title: "Помидор",
        price: 20,
        id: 0,
      },
      {
        title: "Огурец",
        price: 25,
        id: 1,
      },
      {
        title: "Мясо",
        price: 225,
        id: 2,
      },
    ];
  
    const [products, setProducts] = useState(initialProducts);
  
    const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    return (
      <ProductContext.Provider value={{ products, addProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
  };