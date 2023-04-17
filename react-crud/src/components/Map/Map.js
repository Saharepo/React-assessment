import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "../Map/Map.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Geocode from "react-geocode";
import config from "../../config.json"

const Mapview = () => {

  let SERVER_URL = config.SERVER_URL

  const [state, setState] = useState({
    data : []
  })

  const [array, setArray] = useState({
    data : []
  });

  const [city,setCity] = useState({
    data : []
  })

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.GOOGLE_API_KEY
  });

  useEffect(()=>{
    getDate()
  },[])

  const getDate = async()=>{
    await axios.get(SERVER_URL+"/contacts/getAllContact")
    .then(async(res)=>{
    if(res){
    setState({data : res.data.result})
    }
    let cityName = []
      await res.data.result.forEach(async(val)=>{
      cityName.push(val.City)
    })
    setCity({ data : cityName})
    
  })
  .catch((err)=>{
    console.log(err)
  })
  }

  
  const onLoad = async(map) => {
    
    //To Get the lattitude and lagnitude
      Geocode.setApiKey(config.GOOGLE_API_KEY);
      Geocode.setLanguage("en");
      Geocode.setRegion("in");
      Geocode.setLocationType("ROOFTOP");
      Geocode.enableDebug(); 
      let details = await Geocode.fromAddress(city.data)
      .then(async(response) => {
      let result = await response.results
      return result
    }
    ).catch((err)=>{console.log('errrrr', err)})


    let newArr = []
    await details?.forEach(async(data)=>{
            console.log("geometry.location", data.geometry.location)
            newArr.push(data.geometry.location)
            return data.geometry.location
    })

    setArray({data : newArr})

    //Map the lat and lng 
    const bounds = new window.google.maps.LatLngBounds();
    newArr?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  
  } 
    
  


  return (
    <div className="Mapp">

    {state.data.length===0?(<h1>Please add contacts</h1>) : 
     !isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap mapContainerClassName="map-container" onLoad={onLoad}>
      {array.data.map(({ lat, lng }, key) => (
        <MarkerF key={key} position={{ lat, lng }} />
      ))}
    </GoogleMap>
    )
    }
    </div>
  );
};

export default Mapview;