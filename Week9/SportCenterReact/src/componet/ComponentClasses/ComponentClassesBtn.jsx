const btns=[
  {id:"yoga-btn",text:"Yoga" },
  {id:"group-btn",text:"Group"},
  {id:"solo-btn",text:"Solo"},
  {id:"stretching-btn",text:"Stretching"}
]

function ComponentClassesBtn(props) {
    
    return (
      <div className="classes-head" id="classes-head">
        {btns.map(btn => (
          <button id={btn.id} className="classes-button">{btn.text}</button>
        ))}
      
     </div>
      
    );
  }
  
  export default ComponentClassesBtn;