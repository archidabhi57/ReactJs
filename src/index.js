import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Myapp()
{
  const [data,setData] = useState([]);

  useEffect(()=>{
    let apiURL = ("http://localhost:5711/faculties");
    fetch(apiURL)
    .then((res)=>res.json())
    .then((res)=>setData(res));
  },[]);

  const result = data.map((e)=>{
    return(e.FacultyName);
  });
  return result;
}

root.render(<Myapp/>);