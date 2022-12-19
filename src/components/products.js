import Productlist from "./productlist";
import Breadcrumbs from "./metrialui/breadcrumbs";
import { Container } from "@mui/system";
import { useState, createContext, useContext } from "react";
import { CounterContext } from "./guide/counterContext";
import CategoryProduct from "./categoryproduct";


const Products = () => {

  const [categoryname, setCategoryName] = useState("0");


    return <>
    <Container maxWidth="md">
      <h2>Our Products</h2>
      <Breadcrumbs parent="Home" child="Our Products" />
      <br />
      <CounterContext.Provider value={[categoryname, setCategoryName]}>
      <CategoryProduct />
      <Productlist />
    </CounterContext.Provider>
      
     </Container>
      
    </>
}

export default Products;