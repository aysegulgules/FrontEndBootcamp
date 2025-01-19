function ComponentUS(props) {
    
    return (
        <div className="contact-div">
        <section id="section-contact" class="section-review">
            <div className="section-header">
                <h2>Contact Us</h2>
               <div className="line"> </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque omnis obcaecati ipsum distinctio praesentium  </p>
            </div>
            <div className="section-contact-content">
                <div className="contact-form">
                    <div class="contact-form-head">
                        <p>Mobile Number<br/>
                            <span>+135 777 321 4442</span>
                        </p> 
                        <p>Email Adress<br/>
                            <span>demeo@demo.com</span>
                        </p>
                    </div>
                    <h4>Make An Appoinment</h4>
                    <form>
                        <input type="text" placeholder="Your Name"></input>
                        <input type="email" placeholder="Your Email"></input>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Your Message" ></textarea>
                    </form>
                  
                </div>
                <div className="contact-map" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.932318620973!2d28.9680!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8d483ad2cdb%3A0x8c7b5e7e0f0bfedb!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1627064893723!5m2!1sen!2sus" 
                    height="350" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
        
        </div>
      
    );
  }
  
  export default ComponentUS;


