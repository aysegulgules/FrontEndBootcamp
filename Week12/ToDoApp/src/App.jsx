import { useEffect, useState } from 'react'
import { useTodoContext } from './contexts/ToDoContext';
import './App.css'
import   {AllComponent} from './components/AllComponent'
import { todos } from './components/Todos';

function App() {

  
  const [pushToDo,setPushToDo]=useState(false);
  const [status, setStatus] = useState("all");
  const {activeCount, setActiveCount,todoss,setTodoss}=useTodoContext(); 




 const handKeyPress=(e)=>{
  if(e.key==='Enter' && e.target.value!=='')
    {
      console.log(e.target.value)
      const newTodo={task:e.target.value,status:true};  
      setPushToDo(!pushToDo);    
      todos.push(newTodo);
      setActiveCount(todoss.filter(todo=>todo.status).length);
  }
 }
 
 const handClearCompleted=()=>
 {
  const clearCompletedList=todoss.filter(todo=>todo.status);
  setTodoss([...clearCompletedList]);
  console.log(clearCompletedList);
  setStatus("all");
 }
 useEffect(() => {
  console.log(todoss);

}, [todoss]);

  return (
    <>
       <header className="header">
        <h1>todos</h1>
        <form>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={handKeyPress} />
        </form>
      </header>
    
   <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        {<AllComponent  status={status} /> }
   
  
  
      </section>
    
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong>
          items left
        </span>
    
        <ul className="filters">
        <li>
            <a href="#/" className="selected" onClick={()=>setStatus("all")}>All</a>
          </li>
          <li>
            <a href="#/" onClick={()=>setStatus("active")}>Active</a>
          </li>
          <li>
            <a href="#/" onClick={()=>setStatus("completed")} >Completed</a>
          </li>
        </ul>
    
        <button className="clear-completed"  onClick={handClearCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  )
}

export default App
