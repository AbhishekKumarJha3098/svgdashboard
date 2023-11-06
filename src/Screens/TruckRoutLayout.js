import React, {useEffect, useState} from 'react'
import TruckRouteImage from '../components/TruckRouteImage' 
import axios from 'axios'

function TruckRoutLayout() {

  const [truckValue, setTruckvalue] = useState(5)

   

    useEffect(() => {
   
      const interval = setInterval(() => {
      axios
        .get("https://hulnesa.dfos.co:1882/abhi")
        .then((res) => {
        // console.log(res.data[0].loading17);
          setTruckvalue(res.data[0].loading17);
       console.log(truckValue)
        })
        .catch((error) => {
          return console.log(error);
        });
      },5000);
      return () => {
        clearInterval(interval);
      };
      
    }, [truckValue])
  


  return (
   <TruckRouteImage truckLocation = {truckValue}/>
  )
}

export default TruckRoutLayout;