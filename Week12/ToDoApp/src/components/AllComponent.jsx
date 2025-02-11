import { use,useState,useEffect } from 'react';
import { useTodoContext } from '../contexts/ToDoContext';



export const AllComponent = ({status}) => {  
 
 const [funcStatus,setFuncStatus]=useState(false);
 const {activeCount, setActiveCount,todoss,setTodoss}=useTodoContext();
 const [todoList, setTodoList] = useState(todoss);
 

 console.log(status)
 useEffect(() => {
 if (status === "active") 
    {
      console.log("activ");
      setTodoList(todoss.filter(todo =>todo.status));
    } else 
     if (status === "completed") 
     {
      console.log("compld");
      setTodoList(todoss.filter(todo =>!todo.status));
    } 
    else
    {
        setTodoList(todoss);
    }

}, [status]);


     
   const handDestroy=(task)=>{
        
       const index=todoss.findIndex(todo=>todo.task===task)
       if (index !== -1) {
           todoss.splice(index, 1);}
           setFuncStatus(!funcStatus);
       console.log(task)
   }
   const handCheckBoxClick=(task)=>{

   const index=todoss.findIndex(todo=>todo.task===task)
   if (index !== -1) {
       todoss[index].status=!todoss[index].status;
       
   }
   console.log(task,!todoss[index].status);
    
   setActiveCount(todoss.filter(todo=>todo.status).length);
   setFuncStatus(!funcStatus);
   }
   
 
    return(<>
    
    <ul className="todo-list">
    {todoList.map((todo, index) => (
        <li key={index} className={!todo.status?"completed":""}> 
        <div className="view">
        
            <input className="toggle" type="checkbox"  onClick={()=>handCheckBoxClick(todo.task)}/>
            <label>{todo.task}</label>
            <button className="destroy" onClick={()=>handDestroy(todo.task)}></button>
        </div>
        </li>
    ))}
    </ul>

    
    </>)
 }
