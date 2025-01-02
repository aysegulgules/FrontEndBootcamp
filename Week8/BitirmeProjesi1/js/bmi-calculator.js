document.addEventListener('DOMContentLoaded', function() {
    const triangle = document.getElementById('triangle');
    const imageContainer = document.querySelector('.image-container');
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
