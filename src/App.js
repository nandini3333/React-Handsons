
import './App.css';
import React from 'react';
import {useState} from 'react'
import Fcomp from './Fcomp'
import Clcomp from './Clcomp'
function App(){
  const [Func,setFunc] = useState(false)
  const [Ccomp,setClcomp] = useState(false)
    return(
       <div>
           <h1 className='title'>Styling using functional and class components</h1>
           <button onClick ={()=>setFunc(!Func)}>To see styling in functional component</button>
           <button onClick = {()=>setClcomp(!Ccomp)}>To see styling in class component</button>
           <div className = "flex"> 
            {Func && <Fcomp/>}
             {Ccomp && <Clcomp/>}
            </div>
           </div>
      
    );
  }
export default App;


