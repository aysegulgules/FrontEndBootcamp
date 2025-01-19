function ComponentClasses(props) {
    
    return (
      <div className="classes-div" id="classes-div">
      <section id="section-classes" className="section-classes" >
      <div className="section-header">
                <h2>Our Classes</h2>
               <div class="line"> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque omnis obcaecati ipsum distinctio praesentium  </p>
            </div>
            <div className="section-classes-content">
            <div className="classes-head" id="classes-head">
                    <button id="yoga-btn" className="classes-button">Yoga</button>
                    <button id="group-btn"  className="classes-button">Group</button>
                    <button id="solo-btn" className="classes-button">Solo</button>
                    <button id="stretching-btn" className="classes-button">Stretching</button>
                </div>
                <div className="classes-content">
                <div className="classes-content-text">
                        <h3>Why are your <span id="classes-head-span">Yoga</span>?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cumque omnis obcaecati ipsum distinctio praesentium 
                            voluptates, quidem, quas, quos quae quia. 
                            Quisquam, quod. </p>
                            <h3 >When comes <span id="classes-span">Yoga</span> Your Time</h3>
                            <p>Saturday-Sunday: 8:00am - 10:00am</p>  
                        <p>Monday-Tuesday: 10:00am - 12:00am</p> 
                        <p>Wednesday-Friday: 3:00am - 6:00am</p> 
                        
                    </div>
                    <div className="classes-img">
                        <img id="clss-img" src="images/yoga.jpg"></img>
                    </div>

                </div>


            </div>
            
      </section>   
      </div>
      
    );
  }
  
  export default ComponentClasses;