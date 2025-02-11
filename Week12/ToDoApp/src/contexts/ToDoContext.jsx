import { useContext, createContext, useState } from "react";
import { todos } from "../components/Todos";

const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  const [activeCount, setActiveCount] = useState(2); 
  const [todoss,setTodoss]=useState(todos);  
  const data = { activeCount, setActiveCount,todoss,setTodoss};

  return (
    <ToDoContext.Provider value={data}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useTodoContext = () => useContext(ToDoContext);
