import React from 'react'
import {useState} from 'react'
import { Icon } from 'leaflet'
import houseIcon from '../assets/images/navigator.png'
import PinIcon from '../assets/images/icon.png'
import L from "leaflet";
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import axios from 'axios'
function SearchMap(props) {
  const properties = props.properties
console.log(properties)
  const [locationDisplayName,setLocationDisplayName] = useState(()=>{if(props.address){return props.address.displayName}else{return ''}})
  const [point,setPoint] = useState( 
    ()=>{if(props.address){return [props.address.lat,props.address.long] }else{return [28.3949,84.1240]}}
    )
  const draggable = props.draggable
  const handleAddress = props.handleAddress
  
var address = {
  lat:28.3949,long:84.1240
}
if(props.address){
  address = props.address
}
    const customIcon = new Icon(
        { iconUrl:houseIcon,
         iconSize:[38,38],
         iconAnchor: [12, 41]
       }
       )


       const customPinIcon = new Icon(
        { iconUrl:PinIcon,
         iconSize:[38,38],
         iconAnchor: [12, 41]
       }
       )
     
     console.log(point)
     
       
  return (
    <>
    {
      point?<div>
      <div>Location:{locationDisplayName}</div>
        <MapContainer center={[28.3949,84.1240]} zoom={7}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
>




</TileLayer>
<Marker position={[address.lat,address.long]} icon={customPinIcon}></Marker>

{
  properties.map((property)=>{
if(property.longitude){

      return <Marker  draggable={draggable} position={[property.longitude,property.latitude]} icon={customIcon}
    
// eventHandlers={{
//   dragend: (e) => {

//     const lat = e.target._latlng.lat
//     const long = e.target._latlng.lng
//     console.log(lat,long)
    
   
//     console.log(lat,long)
//     axios.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${long}`).then((res)=>{
//     console.log(res)
//     setLocationDisplayName(res.data.display_name)
//     handleAddress({
//       lat:lat, 
//       long:long,
//       displayName:res.data.display_name,
//       address:res.data.address
//     })
//   })
    
//   },
// }}
>
<Popup>
      {property.title}
    </Popup>
</Marker>
  }
  })
}






</MapContainer>
    </div>:<></>
    }
    
    </>
  )
}

export default SearchMap