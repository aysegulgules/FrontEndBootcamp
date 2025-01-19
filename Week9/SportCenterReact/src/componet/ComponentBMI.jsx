function ComponentBMI(props) {
    
    return (
      <div className="bmi-div">
      <section id="section-bmi" className="section-bmi" >
      <div class="bmi-content">
            <div class="bmi-content-text">
                <h3>BMI Calculator</h3>
                <div > </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque omnis obcaecati ipsum distinctio praesentium  </p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cumque omnis obcaecati ipsum distinctio praesentium  </p>
                  <div class="bmi-content-calculator">
                    <input placeholder="Your Height" id="person-height"></input> <span>cm</span>
                    <input placeholder="Your Height" id="person-height"></input><span>kg</span>
                    </div>
                
            </div>
            <div class="bmi-content-img">
                <h3>Your BMI  </h3>
                <img src="images/bmi-index.jpg" id="bmi-img"></img>
                <div class="triangle" id="triangle"></div>
            </div>
        </div>


      </section>   
      </div>
      
    );
  }
  
  export default ComponentBMI;