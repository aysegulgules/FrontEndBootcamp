function ComponentFooter(props) {
    
    return (
        <div className="footer-div">
        <section id="section-footer" className="section-footer">
            <div className="footer-content">
                <div className="footer-content-logo">
                   <a href="" id="header-a" >
                    <img Id="header-img" src="images/logo.png" alt=""></img>
                    </a>
                </div>
                <div className="footer-content-text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                       Officia cumque impedit quasi maxime ipsam, distinctio ratione, dolorem eaque perspiciatis quod 
                       sed similique eligendi alias non itaque, minus ducimus voluptates natus voluptatem. 
                       Qui, alias a? Laboriosam cumque exercitationem quis veritatis dolor.  </p>
                </div>
                <div className="footer-content-links">
                   <div id="footer-div2">
                       <h4>Information</h4>
                       <ul>
                           <li><a href="">About Us</a></li>
                           <li><a href="">Classes</a></li>
                           <li><a href="">Blog</a></li>
                           <li><a href="">Contact</a></li>
                       </ul>
                   </div>
                   <div>
                       <h4>Helpful Link</h4>
                       <ul>
                           <li><a href="">Services</a></li>
                           <li><a href="">Supports</a></li>
                           <li><a href="">Trems & Condition</a></li>
                           <li><a href="">Privacy Policy</a></li>
                       </ul>
                   </div>
                    
                </div>
            </div>
            </section>
       </div>
       

      
    );
  }
  
  export default ComponentFooter;