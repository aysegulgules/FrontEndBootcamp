window.addEventListener("scroll",()=>{
    if(window.scrollY>55)
    {
        document.getElementById("header-nav").style.backgroundColor="#355592";
        document.getElementById("header-nav").style.height="65px"
       
    }
    else 
    {
        
         document.getElementById("header-nav").style.backgroundColor="transparent";
    }
});