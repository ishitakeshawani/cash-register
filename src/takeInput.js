import React, {  useState } from "react";
import Results from "./results";


const TakeInput= (props) => {
    const [pay,setPay] = useState();
    let [error,setError] = useState('');
    const [iserror,setISError] = useState(true);
    function handleCheck(){
           

            if(pay === "" || pay === undefined){
                setISError(true);
                setError("Enter valid bill amount and cash given to continue");
            }else if(pay === props.amount){
               setISError(true);
                setError("No amount should be returned");
                
            }else if(pay < props.amount){
               setISError(true);
                setError("Cash is less than bill, please enter right amount");
            }else{
                setISError(false);
                // setError(" ");
            }
       

    }



    return(
        <div>
           <div>
          <div className="bill-amount">
            Cash Given:
          </div>
          <input type="number" id="pay" value={pay} 
          onChange={(e) => {
            setPay(e.target.value);
            }}
          />
          </div>
          <button onClick={handleCheck}>Check</button>
          {iserror ?  <p className="about">{error  || ""}</p> : <Results amount={props.amount} pay={pay}/> }
          
        </div>
    );
}

export default TakeInput;