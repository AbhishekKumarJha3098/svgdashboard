import React, {useState, useEffect} from 'react'
import ScadaLayoutSvg from '../components/ScadaLayoutSvg'
import axios from 'axios'

function ScadaLayout() {

  const [tagValue, setTagvalue] = useState(5)

  useEffect(() => {
   
    const interval = setInterval(() => {
    axios
      .get("http://192.168.1.4:1880/get")
      .then((res) => {
        setTagvalue(res.data);
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