const cards=[
    {id:1,head:"325",content:"Courses"},
    {id:2,head:"405",content:"Work Out"},
    {id:3,head:"305",content:"Working Hour"},
    {id:4,head:"705",content:"Happy Client"}
]
function ComponentCard1(props) {
    
    return (
        <section id="section-card" className="section-card" >    
        {cards.map(card => (
            <div className="card-1">
            <h3>{card.head}</h3>
            <p>{card.content}</p>
            </div>
        ))}    
                     
        </section>   
      
    );
  }
  
  export default ComponentCard1;