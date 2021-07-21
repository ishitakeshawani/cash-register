import {  useState } from 'react';
import './App.css';
import TakeInput from './takeInput';


function App() {
  const [amount,setAmount] = useState();
  const [error,setError] = useState('');
  const [showText, setShowText] = useState(false);
  const [empty,setEmpty] = useState(true);

  

  function handleSubmit(){
    if(amount === "" || amount === undefined){
      setError("Enter valid bill amount");
      setEmpty(true);
      
    }else{
      setShowText(true);
      setEmpty(false);
    }
  }


  return (
    <div className="App">
     <div className="container">
        <h2 className="title">
        Cash Register Manager
        </h2>
        <p className="about">
        Enter the bill amount and cash given by the customer and know minimum number of notes to return.
        </p>
        <div>
          <div className="bill-amount">
            Bill Amount:
          </div>
          <input type="number" id="bill" value={amount} 
          onChange={(e) => {
            setAmount(e.target.value);
            }}
          />
         {empty ? <button onClick={handleSubmit}>Next</button> : "" }
          { showText ? <TakeInput amount={amount} /> : <p className="about">{error  || ""}</p> }
           
          
          
        </div>
        
     </div>
    </div>
  );
}



export default App;
