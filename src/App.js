import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import TruckRoutLayout from './Screens/TruckRoutLayout';
import ScadaLayout from './Screens/ScadaLayout';
import ToothPasteLayout from './Screens/ToothPasteLayout';
import Icon from './Screens/square';
// import Tms from './Screens/Tms';
import TmsLayout from './Screens/TmsScreen';



function App() {

  

  return (
    
     
   
      <Routes> 
     <Route exact path="/" element = {<TruckRoutLayout />} />
     <Route path="/scadalayout" element= {<ScadaLayout />} />
     <Route path="/toothpaste" element= {<ToothPasteLayout />} />
     <Route path="/square" element= {<Icon />} />
     <Route path="/tms" element= {<TmsLayout/>} />
     </Routes>

     
    
    
    
  );
}

export default App;
