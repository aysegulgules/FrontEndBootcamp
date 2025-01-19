const triangle = document.getElementById('triangle');
const imageContainer = document.querySelector('.image-container');



document.addEventListener('DOMContentLoaded', function() {
 
    let isDragging = false;
    let startX;

    triangle.addEventListener('mousedown', function(event) {
        isDragging = true;
        startX = event.clientX - triangle.offsetLeft;
        event.preventDefault();
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            requestAnimationFrame(() => {
                let x = event.clientX - startX;
                if (x >= 0 && x <= document.querySelector('#bmi-img').offsetWidth - triangle.offsetWidth-55) {
                    triangle.style.left = `${x}px`;
                }
            });
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

   
});
const personheight=document.querySelector('#person-height');
const personweight=document.querySelector('#person-weight');

personweight.addEventListener( 'input',function(){
    
 

    height=personheight.value/100;
    weight=personweight.value;

    const bmi=(weight/(height*height));
 
    
    if (bmi < 18.5) 
        { 
            triangle.style.marginLeft='60px'; 
        }
     else if (bmi >= 18.5 && bmi < 24.9)
        { 
            triangle.style.marginLeft='130px'; 
        } 
     else if (bmi >= 25 && bmi < 29.9)
        { 
           triangle.style.marginLeft='200px';
        } 
    else if (bmi >= 30 && bmi <= 34.9) 
        { 
            triangle.style.marginLeft='270px';
         }
    if ( bmi>34.9) 
        { 
            triangle.style.marginLeft='340px';
        }

       

})

personheight.addEventListener('input',function(){
    triangle.style.marginLeft='26px';
})