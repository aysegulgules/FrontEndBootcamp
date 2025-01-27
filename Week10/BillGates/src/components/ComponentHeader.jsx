import {  useState,useEffect } from "react";
import { BillGatesProvider } from "../context/BillGatesContext";
import { useBillGates } from "../context/BillGatesContext";

function ComponentHeader(props) {
    const data = useBillGates();
    const [total,setTotal] = useState();

    useEffect(() => {
   
        setTotal(data.balance);
              
    }, [data.balance]);

    return (
        <>
        <section id="section_bill">

        <img src="images/billgates.jpg" id="bill"></img>
        <h1>Spend Bill Gates' Money</h1>
        </section>
        <section id="section_bakiye">
        <h1 id="h1_bakiye">$<span id="bakiye">{data.balance}</span></h1>
        </section>
        </>
       
    );
  }
  
  export default ComponentHeader;