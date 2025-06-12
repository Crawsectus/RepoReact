import React,{useState} from "react";
function Component(){
    const [name,setName] = useState(0);
    return(
        <div>
            <p>Value: {name}</p>
            <button onClick={()=>setName(n=>n+1)}>Aumentar valor</button>
        </div>
    );
}
export default Component;