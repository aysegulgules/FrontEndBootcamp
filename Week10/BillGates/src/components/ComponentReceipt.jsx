import {  useState,useEffect } from "react";
import { BillGatesProvider } from "../context/BillGatesContext";
import { useBillGates } from "../context/BillGatesContext";
import { products } from "./Products";

function ComponentReceipt(props) {
    const data = useBillGates();
    const [total,setTotal] = useState();

    useEffect(() => {
   
        setTotal(data.balance);
   
      
    }, [data.balance]);

    const formatPrice = (price) => {
      if (price >= 1e9) {
        return (price / 1e9) + "b";
      } else if (price >= 1e6) {
        return (price / 1e6)+ "m";
      } else {
        return price;
      }
    };





    return (
      <section id="section_receipt" >
        <div id="head_receipt"> 
        Your Receipt</div>
        {products.map((product, index) =>  product.amount >0 && (

          <div className="div_receipt" key="index"><p className="p-name">{product.name}</p> <p>x{product.amount}</p> <p className="p-price">${formatPrice(product.price)}</p> </div>
        ) )}
        
       <div> <div id="total_receipt"><span style={{paddingLeft:"40px"}}>Total</span><span style={{color: '#1cb970'}}>${total}</span></div></div>
      </section>
      
    );
  }
  
  export default ComponentReceipt;