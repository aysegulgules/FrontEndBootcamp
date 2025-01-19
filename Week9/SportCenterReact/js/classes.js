const yogagBtn=document.querySelector('#yoga-btn');
const groupBtn=document.querySelector('#group-btn');
const soloBtn= document.querySelector('#solo-btn');
const stretchingBtn=document.querySelector('#stretching-btn');

const classesHeadSpn=document.querySelector('#classes-head-span');
const classesSpn=document.querySelector('#classes-span');
const classesImg=document.querySelector('#clss-img');

const classesHead=document.querySelector('#classes-head');

function classesHeadChanged(e)
{
    if(e.target.id==='yoga-btn')
        {
            classesImg.src='images/yoga.jpg';
            classesHeadSpn.textContent='Yoga';
            classesSpn.textContent='Yoga';
        }
        else if(e.target.id==='group-btn')
        {        
            classesImg.src='images/group.webp';
            classesHeadSpn.textContent='Group';
            classesSpn.textContent='Group';
        }
        else if(e.target.id==='solo-btn')
        {
            classesImg.src='images/solo.jpg';
            classesHeadSpn.textContent='Solo';
            classesSpn.textContent='Solo';
        }
        else if(e.target.id==='stretching-btn')
        {
            classesImg.src='images/stret.webp';
            classesHeadSpn.textContent='Stretching';
            classesSpn.textContent='Stretching';
        }
}

classesHead.addEventListener('mouseover', function(e) {

    classesHeadChanged(e);  
});


