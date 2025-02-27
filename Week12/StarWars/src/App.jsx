import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

const starshipss={
  "name": "Death Star",
	"model": "DS-1 Orbital Battle Station",
	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
}

function App() {
    const [pageAPI]=useState(import.meta.env.VITE_BASE_URL);
    const [newData,setNewData]=useState(starshipss);
    const [update,setupdate]=useState(starshipss);
    const [datas, setDatas] = useState([]);
    const [updateState,setupdateState]=useState(false);


 useEffect(() => {
      const request = async () => {
        try {
          const res = await axios.get(pageAPI);
          setDatas(res.data.results);
          setupdateState(true);  
          console.log(res.data);
                    
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      request();
    }, [updateState]);

  return (
    <>
  
  <div className='divstar'>
    {datas.map((data) => (
      <div className='column'>
      <img src="https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM" style={{height:"100px",width:"100px"}}></img>
      <div>
        <h1>{data.name}</h1>
        <p>Model: {data.model}</p>
      </div>   
    </div>))}
    
    
    
   </div>  
    </>
  )
}

export default App
