function ComponentPurchase(props) {
    
    return (
      <div className="purchase-div" >
      <section id="section-purchase" className="section-purchase" >
      <div className="section-header">
                <h2>Purchase From Us</h2>
               <div class="line"> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque omnis obcaecati ipsum distinctio praesentium  </p>
            </div>
            <div className="section-purchase-content">
                <div className="purchase-card">
                    <img src="./images/purchase1.jpg"></img>
                     <h4>Kettlebel /5 kg</h4>
                    <p><span>89,99$</span>/59,99$</p>
                    <button class="bi bi-cart-check-fill">Add To Cart</button>
                </div>
                <div className="purchase-card">
                <img src="./images/purchase2.jpg"></img>
                    <h4>Treadmill</h4>
                    <p><span>899,999$</span>/59,99$</p>
                    <button class="bi bi-cart-check-fill">Add To Cart</button>
                </div>
                <div className="purchase-card">
                   <img src="./images/purchase3.jpg"></img>
                    <h4>Adjustable Dumbbell</h4>
                    <p><span>89,99$</span>/59,99$</p>
                    <button class="bi bi-cart-check-fill">Add To Cart</button>
                </div>
                <div className="purchase-card">
                    <img src="./images/purchase4.jpg"></img>
                    <h4>Kettlebel /3 kg</h4>
                    <p><span>89,99$</span>/59,99$</p>
                    <button class="bi bi-cart">Add To Cart</button>
                </div>

            </div>


      </section>   
      </div>
      
    );
  }
  
  export default ComponentPurchase;