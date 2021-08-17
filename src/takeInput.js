import React, {  useState } from "react";
import Results from "./results";


const TakeInput= (props) => {
    const [pay,setPay] = useState();
    let [error,setError] = useState('');
    const [iserror,setISError] = useState(true);
    let notes = [2000,500,100,20,10,5,1];
    let [ans,setans] = useState([]);


  const calculate = (amountToreturn) => {
    let note = Array(7).fill(0)
   
    for (let index = 0; index < notes.length; index++) {
      const numofnotes = Math.trunc(
        amountToreturn / notes[index]
      );
      
      amountToreturn = amountToreturn % notes[index];
      note[index] = numofnotes;
      
    }
    setans(note)
  }
  // console.log(noofnotes[0]);



    function handleCheck(){
           
            if (pay === "" || pay === undefined) {
              setISError(true);
              setError("Enter valid bill amount and cash given to continue");
            } else if (Number(pay) === Number(props.amount)) {
              setISError(true);
              setError("No amount should be returned");
            } else if (Number(pay) < Number(props.amount)) {
              setISError(true);
              setError("Cash is less than bill, please enter right amount");
            } else if (Number(pay) > Number(props.amount)) {
              const amountToreturn = Number(pay) - Number(props.amount);
              calculate(amountToreturn);
              setISError(false);
            }
    }



    return(
        <div>
           <div>
          <div className="bill-amount">
          </div>
          <input type="number" id="pay" value={pay} 
            onChange={(e) => {
            setPay(e.target.value);
            }}
          />
          </div>
          <button onClick={handleCheck}>Check</button>
          {iserror ?  <p className="about">{error  || ""}</p> : <Results ans={ans}/> }
         
         
        </div>
    );
}

export default TakeInput;
