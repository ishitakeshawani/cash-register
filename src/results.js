import React from "react";

const Results = ({ans}) => {

    return (
      <div>
        <div className="bill-amount">Return Change:</div>
        <div id="result">
          <table cla="tb">
            <tr>
              <th>
                No.of <br />
                Notes
              </th>
              <td className="noofnotes">{ans[0] > 0 ? ans[0] : " "}</td>
              <td className="noofnotes">{ans[1] > 0 ? ans[1] : " "}</td>
              <td className="noofnotes">{ans[2] > 0 ? ans[2] : " "}</td>
              <td className="noofnotes">{ans[3] > 0 ? ans[3] : " "}</td>
              <td className="noofnotes">{ans[4] > 0 ? ans[4] : " "}</td>
              <td className="noofnotes">{ans[5] > 0 ? ans[5] : " "}</td>
              <td className="noofnotes">{ans[6] > 0 ? ans[6] : " "}</td>
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
