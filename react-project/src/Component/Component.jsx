import React,{useState} from "react";
function Component(){
    const [name,setName] = useState(0);
    const [car,setCar] = useState({year: 1986,make: "Toyota",model: "Corolla"});
    function handleYearChange(event){
        setCar(c=>({...c, year:event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c=>({...c, make:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c=>({...c, model:event.target.value}));
    }
    return(
        <div>
            <p>Value: {name}</p>
            <button onClick={()=>setName(n=>n+1)}>Aumentar valor</button>
            <p>El mejor carro del mundo entero es el: {car.make} {car.model} de {car.year}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange} />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </div>
    );
}
export default Component;