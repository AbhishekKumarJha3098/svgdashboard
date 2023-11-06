import React, {useState, useEffect} from 'react'
import ScadaLayoutSvg from '../components/ScadaLayoutSvg'
// import axios from 'axios'

function ScadaLayout() {

  const [tagValue, setTagvalue] = useState(5)

  useEffect(() => {
   
    const interval = setInterval(() => {
      fetch('http://localhost:1880/get-tag')
    
      .then((response) => response.json())
      .then((data) => {
        setTagvalue(data.tagValue);
      })


      .catch((error) => {
        return console.log(error);
      });
    },2000);
    return () => {
      clearInterval(interval);
    };
   
    
  }, [tagValue])

   console.log(tagValue)



  return (
    <ScadaLayoutSvg tag = {tagValue}/>
  )
}

export default ScadaLayout

