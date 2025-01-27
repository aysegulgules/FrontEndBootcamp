import { useContext,createContext,useState } from "react";

const BillGatesContext = createContext();

export const BillGatesProvider = ({ children }) => {

    const [balance, setBalance] = useState(100000000000);
    const [balanceTotal] = useState(100000000000);
    const data={balance,setBalance,balanceTotal,};
        
    

    return (
        <BillGatesContext.Provider value={data}>
            {children}
        </BillGatesContext.Provider>
    );

}
export const useBillGates =()=>useContext(BillGatesContext);