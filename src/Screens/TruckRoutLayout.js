import React, {useEffect, useState} from 'react'
import TruckRouteImage from '../components/TruckRouteImage'
import axios from 'axios'

function TruckRoutLayout() {

  const [truckValue, setTruckvalue] = useState(5)

   

    useEffect(() => {
   
      const interval = setInterval(() => {
      axios
        .get("http://192.168.1.4:1880/truck")
        .then((res) => {
          setTruckvalue(res.data);
          console.log(truckValue)
        })
        .catch((error) => {
          return console.log(error);
        });
      },10000);
      return () => {
        clearInterval(interval);
      };
      
    }, [truckValue])
  


  return (
   <TruckRouteImage truckLocation = {truckValue}/>
  )
}

export default TruckRoutLayout