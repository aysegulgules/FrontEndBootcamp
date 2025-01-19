function ComponentReview(props) {
    
    return (
        <div className="review-div">
        <section id="section-review" className="section-review">
            <div className="section-header">
                <h2>Review Client</h2>
               <div class="line"> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque omnis obcaecati ipsum distinctio praesentium  </p>
            </div>
            <div className="section-review-content">
                <div className="review-client">
                    <div className="review-client-head">
                        <img src="./images/client1.jpg" alt=""></img>
                        <div>
                            <h6>Diet Expert</h6>
                            <span>CEO</span>
                        </div> 
                    </div> 
                    <div className="review-client-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto labore sit facilis commodi,
                            eaque tempore saepe fugit numquam earum voluptatem, voluptate nulla, aut magni.  </p>
                    </div>
                </div>                                   
                
                <div className="review-client">
                    <div className="review-client-head">
                        <img src="./images/client2.jpg" alt=""></img>
                        <div>
                            <h6>Cardio Trainer</h6>
                            <span>CEO</span>
                        </div>                    
                    </div>
                    <div className="review-client-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto labore sit facilis commodi,
                             eaque tempore saepe fugit numquam earum voluptatem, voluptate nulla, aut magni.  </p>
                    </div>
                </div>

            </div>
        </section>
    </div>

      
    );
  }
  
  export default ComponentReview;