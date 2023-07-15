import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const faculty=[
  {name: "ARJUN",dept: "CSE"},
  {name: "WASIM",dept: "CSE"},
];
root.render(
  <>
    <table >
      <tr style={{border: "1px solid black"}}>
        {
          faculty.map((fac)=>
          {
            return <td style={{border: "1px solid black"}}> {fac.name}</td>
          }
          )
        }
      </tr>
      <tr>
        {
          faculty.map((fac)=>
          {
            return <td style={{border: "1px solid black"}}  > {fac.dept} </td>
          }
          )
        }
      </tr>
    </table>
  </>
);
