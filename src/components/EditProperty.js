import Navbar from './Navbar'
import AddHome from '../containers/AddHome'
import AddLand from '../containers/AddLand'
import { useState,useEffect } from 'react'
import React from 'react'
import {Button,Typography,Input} from "@material-tailwind/react"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker,Popup} from 'react-leaflet'
import osm from "../osm-providers"
import FormData from 'form-data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate,useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EditHome from '../containers/EditHome'
import EditLand from '../containers/EditLand'
import HomeIcon from '../assets/images/new-house.png'
import LandIcon from '../assets/images/acquisition.png'
import Map from '../utils/Map'
function AddProperty() {
  
  const {user} = useSelector((state)=>state)
  
  // if(!user){
  //   return <Navigate to="/login"/>
  // }
  const { propertyId } = useParams();

  const navigate = useNavigate()
  const [address,setAddress] = useState()

 
    // const [center,setCenter] = useState({lat:13.084622,lng:80.248357}) 
    // const ZOOM_LEVEL = 9
    const [property,setProperty] = useState();
    const [sell,setSell] = useState(false);
    const [rent,setRent] = useState(false) 
    const [home,setHome] = useState(false);
    const [land,setLand] = useState(false) 
    const [images,setImages] = useState()
  
    

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/post/${propertyId}`).then(
      (res)=>{
        setProperty(res.data)
        setAddress({
          lat:res.data.latitude, 
          long:res.data.longitude,
          displayName:res.data.location,
          address:""
        })
        if(res.data["property_type"]=="H"){
          setHome(true)
          
        }
        else{
          setLand(true)
        }

        if(res.data["purpose"]=="RT"){
          setRent(true)
        }
        else{
          setSell(true)
        }
      }
    )
  },[])

  const handleAddress =(info)=>{
    console.log(info)


      let street = info.address.region
      
      
    console.log(street)
    let city = ""
      if(info.address.city){
        city = info.address.city
      }
      else{
      city = info.address.county

      }


    setProperty({...property, "location":info.displayName,
    "street":street,
    "city": city,
    "longitude": info.long,
    "latitude": info.lat})

  }


  const onSubmit = (e) =>{
    // const uploadData = new FormData(); 
    // uploadData.append('title',property["title"]); 
    // uploadData.append('author',1)
    // uploadData.append('content','fsdafasfsafas')
    
    // if(home){ 
    //   uploadData.append('land',null)
    //   uploadData.append('house',JSON.stringify(property["house"]))
    // }
    // uploadData.append("map",JSON.stringify(property["map"]))


    // for(let item of uploadData){
    //   console.log(item[0],item[1])
    // }
    

    
    axios.put(`http://127.0.0.1:8000/post/${propertyId}/`,property, {    
  }).then((res)=>{
    console.log(res)  
    navigate(`/property/${res.data.id}`)
  }).catch((error)=>{
    console.log(error.message)
  })

    e.preventDefault(); 
    
  }



    const handleHome = (event) =>{
      setHome(true)
      setProperty({...property,"property_type": "H",},)
      setLand(false)
    }

    const handleLand = (event) =>{
      setLand(true)
      setProperty({...property,"property_type": "L",
    },)
      setHome(false)
    }

    const handleRent = (event) =>{

      setProperty({...property,"purpose":"RT"})
      setRent(true)
      setSell(false)
      
      // if(home){
      //   setProperty({...property,house:{...property["house"],purpose:"SL"}})
        
      // }
      // else{
      //   setProperty({...property,land:{...property["land"],purpose:"SL"}})
      // }
    }

    const handleSell = (event) =>{
      setSell(true)
      setRent(false)
      setProperty({...property,"purpose":"SL"})

      
      // if(home){
      //   setProperty({...property,house:{...property["house"],purpose:"SL"}})
      // }
      // else{
      //   setProperty({...property,land:{...property["land"],purpose:"SL"}})
      // }
      
    }


    

    // const mapRef = useRef()
    return (
      address&&property?<div className="flex flex-col gap-6">
        
      <Navbar/>

{/* body div */}
<div class="flex mx-40  justify-center">


{/* left side form */}
<form onSubmit={onSubmit}>
<div className="flex flex-col mx-6 gap-6 w-2/3">



   {/* property type */}

   <div className="flex flex-col gap-2">

<div>
<Typography variant="h6">Property Type</Typography>
   <Typography className="text-gray-700" variant="paragraph">inform us what type of property you have</Typography>
</div>
<div className="flex justify-between w-56">

    <Button className='p-4 w-24 h-18' color="blue-gray" onClick={handleHome} variant={home?"filled":"outlined"}>
      
      Home
      <img src={HomeIcon}/>
      </Button>
    <Button className='p-4 w-24' color="blue-gray" onClick={handleLand} variant={land?"filled":"outlined"}>Land
    <img src={LandIcon}/>
    </Button>
    </div>

</div>


{/* property for */}

<div className="flex flex-col gap-2">

<Typography variant="h6">For</Typography>
<div className="flex justify-between w-56">

    <Button className='p-4 w-24' color="blue-gray" onClick={handleSell} variant={sell?"filled":"outlined"}>Sell</Button>
    <Button className='p-4 w-24'color="blue-gray" onClick={handleRent} variant={rent ?"filled":"outlined"}>Rent</Button>
    </div>

</div>


{/* image handle */}




{/* Input handle */}
<div>
<Typography variant="h6">Images</Typography>
<div className="flex justify-between w-56">
    <Input type='file' color="blue-gray" multiple="multiple" onChange={(e)=>setProperty({...property,images:e.target.files})}/>
    </div>

</div>


{
home?<EditHome property={property} setProperty={setProperty}/>:<AddLand property={property} setProperty={setProperty}/>
}
</div>

{/* Map */}
<Map address={address} handleAddress={handleAddress} draggable={true}/>

<Button color="blue-gray" className="mx-6 mb-6 mt-4" type="submit">submit</Button>
</form>


</div>

  </div>:<></>
  )
}

export default AddProperty