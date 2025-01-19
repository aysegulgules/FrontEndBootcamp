
const products=[
    {id:1,imgsrc:"images/flip-flops.jpg",name:"Flip Flops",price:"3",},
    {id:2,imgsrc:"images/cruise-ship.jpg",name:"Cruise Ship",price:"930,000,000",},
    {id:3,imgsrc:"images/nba-team.jpg",name:"NBA Team",price:"2,120,000,000",},
    {id:4,imgsrc:"images/airpods.jpg",name:"Airpods",price:"199",},
    {id:5,imgsrc:"images/bike.jpg",name:"Bike",price:"800",},
    {id:6,imgsrc:"images/kitten.jpg",name:"Kitten",price:"1,500",},
    {id:7,imgsrc:"images/mona-lisa.jpg",name:"Mona Lisa",price:"780,000,000",},
    {id:8,imgsrc:"images/auto-rickshaw.jpg",name:"Auto Rickshaw",price:"2,300",}
]
function ComponentCards(props) {
    
    return (
        <>
        <section id="section_card">
            {products.map(product=>(
                <div class="card" >
                <div>  
                    <img className="product_img" src={product.imgsrc} ></img>
                 </div>
                 <div class="product_head" >{product.name}</div>
                 <div className="product_price">${product.price}</div>
                 <div className="product_footer">
                <button className="product_sell">Sell</button>
                <input type="number" value="0"></input>        
                <button className="product_buy">Buy</button>
                </div>
                 </div>
               

                ))}             
          
          </section>
        
          </>
       
      
    );
  }
  
  export default ComponentCards;