const trainers=[
    {imgTrn:"./images/trainer1.jpg"},
    {imgTrn:"./images/trainer2.jpg"},
    {imgTrn:"./images/trainer3.jpg"}
]
function ComponentTrainers1(props) {
    
    return (
        <div className="section-trainers-content">
        {trainers.map(trainer => (
            <div className="trainers-card">
            <img src={trainer.imgTrn}></img>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"><p>Jane Doe <br/><span>Cardio Trainer</span></p></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
            </div>
        ))}      
       
         
    </div> 
      
    );
  }
  
  export default ComponentTrainers1;