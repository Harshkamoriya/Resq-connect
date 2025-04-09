"use client"

import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export const Appcontext = createContext();
export const useAppContext = ()=>{
    return useContext(Appcontext)
}
export const AppcontextProvider = (props) => {

    const [services , setServices] = useState(["mechanic"]);
    const [selectedHelperId , setSelectedHelperId] = useState("");
    const [userLocation , setUserLocation] = useState({
      name:'',
      lat:null,
      lon:null,
    })
    const [helpersDetails ,setHelpersDetails] = useState([])


    // async function fetchServices() {
    //     try {
    //       const response = await fetch("/api/services"); // Replace with your actual API endpoint
    //       const data = await response.json();
    //       setServices(data);
    //     } catch (error) {
    //       console.error("Error fetching services:", error);
    //     }
    //   }


    useEffect(() => {
      console.log(selectedHelperId,"selectedHelperId is this ")
      }, []);
      useEffect(() => {
        console.log(selectedHelperId,"selectedHelperId is this ")
        }, [userLocation]);



      const value  =  {
        // fetchServices
        selectedHelperId,
        setSelectedHelperId,
        userLocation,
        setUserLocation,
        helpersDetails,
        setHelpersDetails
      }
  return (
   <Appcontext.Provider value={value}>
    {props.children}
   </Appcontext.Provider>
  )
}

