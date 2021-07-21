import React from "react";

const Results = ({amount,pay}) => {

    // let noteCounter = Array(7).fill(0);

    // useEffect(()=> {
    // let notes = [2000,500,100,50,10,5,1];
    // let give = amount-pay;

    // for (let i = 0; i < 7; i++) {
    //     if (give >= notes[i]) {
    //         noteCounter[i] = give / notes[i];
    //         give = give - noteCounter[i] * notes[i];
    //         console.log(noteCounter[i]);
    //     }
    // }

    // },[amount,pay,noteCounter]);
    
    var give = pay - amount;
    var twothousand = parseInt(give/2000);
    give = give - twothousand*2000;
    var fivehundread = parseInt((give) / 500);
    give = give - fivehundread*500;
    var hundred = parseInt((give) / 100);
    give = give - hundred*100;
    var twenty = parseInt(give/20);
    give = give - twenty*20;
    var ten = parseInt(give/10);
    give = give - ten*10;
    var five = parseInt(give/5);
    give = give - five*5;
    var one = parseInt(give/1);
    return(
        <div>
            <div className="bill-amount">
            Return Change:
          </div>
          <div id="result">
          <table cla="tb">
              <tr>
                  <th>No.of Notes</th>
                {/* {  noteCounter.map(e => (
                    <td className="noofnotes">{e}</td>
                )) */}
                
                  <td className="noofnotes">{twothousand > 0 ? twothousand : " "}</td>
                  <td className="noofnotes">{fivehundread > 0 ? fivehundread : " "}</td>
                  <td className="noofnotes">{hundred > 0 ? hundred : " "}</td>
                  <td className="noofnotes">{twenty > 0 ? twenty : " "}</td>
                  <td className="noofnotes">{ten > 0 ? ten : " "}</td>
                  <td className="noofnotes">{five > 0 ? five : " "}</td>
                  <td className="noofnotes">{one > 0 ? one : " "}</td>
              </tr>
              <tr>
                  <th>Note</th>
                  <td>2000</td>
                  <td>500</td>
                  <td>100</td>
                  <td>20</td>
                  <td>10</td>
                  <td>5</td>
                  <td>1</td>
              </tr>
          </table>
          </div>
        </div>
    );
}

export default Results;