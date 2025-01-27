import { useState, useEffect } from "react";
import { products } from "./Products";
import { useBillGates } from "../context/BillGatesContext";

function ComponentCards(props) {
   const [productAmount, setProductAmount] = useState(products.map(product => product.amount));
   const data = useBillGates();

   function productSell(index) {
        if(products[index].amount <= 0) {
            alert("Bu ürünü satmak için ürününüzün olması gerekmektedir!");
            return;
        }
        products[index].amount = products[index].amount - 1;
        const price = parseInt(products[index].price);
        data.setBalance(data.balance + price);
        const newAmount =[...productAmount];
        newAmount[index] = products[index].amount;
        setProductAmount(newAmount);
        console.log("balance:" + data.balance);
    }

    function productBuy(index) {
        if(data.balance < products[index].price) {
            alert("Bu ürünü satın almak için yeterli paranız yok!");
            return;
        }
        products[index].amount = products[index].amount + 1;
        const price = parseInt(products[index].price);
        data.setBalance(data.balance - price);
        const newAmount =[...productAmount];
        newAmount[index] = products[index].amount;
        setProductAmount(newAmount);
        console.log("balance:" + data.balance);
    }

    return (
        <>
            <section id="section_card">
                {products.map((product, index) => (
                    <div className="card" key={index}>
                        <div>
                            <img className="product_img" src={product.imgsrc} alt={product.name} />
                        </div>
                        
                        <div className="product_head">{product.name}</div>
                        <div className="product_price">${product.price}</div>
                        <div className="product_footer">
                            <button 
                                className="product_sell"
                                style={{
                                    backgroundColor: productAmount[index] > 0 ? "#d43ea2" : "white",
                                    cursor: product.amount > 0 ? "pointer" : "not-allowed"
                                }}
                                onClick={() => productSell(index)}
                                disabled={product.amount <= 0}
                            >                                
                                Sell
                            </button>                            
                            <input type="number" value={product.amount || 0} readOnly />
                            <button className="product_buy" onClick={() => productBuy(index)}>Buy</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default ComponentCards;
