import Navbar from './Navbar'
import AddHome from '../containers/AddHome'
import AddLand from '../containers/AddLand'
import { useState,useEffect } from 'react'
import React from 'react'
import {Button,Typography,Input} from "@material-tailwind/react"
import FormData from 'form-data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeIcon from '../assets/images/new-house.png'
import LandIcon from '../assets/images/acquisition.png'
import Map from '../utils/Map'
function AddProperty() {

  const {user} = useSelector((state)=>state)
  
  // if(!user){
  //   return <Navigate to="/login"/>
  // }




  const navigate = useNavigate()
  const template = {
    "title": "",
    "content": "",
    "purpose": null,
    "area_formating": null,
    "area1": 0,
    "area2": 0,
    "area3": 0,
    "price": 0,
    "property_type": null,
    "no_of_bedrooms": 0,
    "no_of_bathrooms": 0,
    "no_of_floor": 0,
    "parking_area": 0,
    "facing_side": "",
    "built_date": 0,
    "location": "1",
    "street": "1",
    "city": "1",
    "longitude": 1,
    "latitude": 1,
    "author": user["userState"]["id"],
    "images":[]
}
 

 
    // const [center,setCenter] = useState({lat:13.084622,lng:80.248357}) 
    // const ZOOM_LEVEL = 9
    const [property,setProperty] = useState();
    const [sell,setSell] = useState(false);
    const [rent,setRent] = useState(false) 
    const [home,setHome] = useState(false);
    const [land,setLand] = useState(false) 
    const [address,setAddress] = useState({
      
      lat:28.3949,
      long:84.1240,
      displayName:""
    })
    const [images,setImages] = useState()
  

    
    

  useEffect(()=>{
    
  },[])


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




    const formData = new FormData()


    
    Object.keys(property).forEach(key => {
      
        console.log(key,property[key])

        if(key!="images"){formData.append(key,property[key])}
      
      
    });

    for(let i=0;i<property['images'].length;i++){
      formData.append('uploaded_images',property['images'][i])
    }

    // formData.append('title',property["title"])
    // formData.append('content',property["content"])
    // formData.append('purpose',property["purpose"])
    // formData.append('area_formating',property["area_formating"])
    // formData.append('area1',property["area1"])
    // formData.append('area2',property["area2"])
    // formData.append('area3',property["area3"])
    // formData.append('price',property["price"])
    // formData.append('property_type',property["property_type"])
    // formData.append('no_of_bedrooms',property["no_of_bedrooms"])
    // formData.append('no_of_bathrooms',property["no_of_bathrooms"])
    // formData.append('no_of_floor',property["no_of_floor"])
    // formData.append('parking_area',property["parking_area"])
    // formData.append('facing_side',property["facing_side"])
    // formData.append('built_date',property["built_date"])
    // formData.append('location',property["location"])
    // formData.append('street',property["street"])
    // formData.append('city',property["city"])
    // formData.append('longitude',property["longitude"])
    // formData.append('latitude',property["latitude"])
    // formData.append('author',property["author"])
    // formData.append('title',property["title"])
    // formData.append('uploaded_images',property["images"])




    axios.post('http://127.0.0.1:8000/post/',formData, 
    // {
    //   headers: {
    //       'Content-Type': 'multipart/form-data',
    //   }},

    {headers: {
      'Content-Type': 'multipart/form-data'
    },}
      
      ).then((res)=>{
    console.log(res)  
    navigate(`/property/${res.data.id}`)
  }).catch((error)=>{
    console.log(error.message)
  })

  

    e.preventDefault(); 
    
  }

  const handleAddress =(info)=>{
    console.log(info)
    setProperty({...property, "location":info.displayName,
    "street":info.address.suburb,
    "city": info.address.city,
    "longitude": info.long,
    "latitude": info.lat})

  }

    const handleHome = (event) =>{
      setHome(true)
      setProperty({...template,"property_type": "H",},)
      setLand(false)
    }

    const handleLand = (event) =>{
      setLand(true)
      setProperty({...template,"property_type": "L",
    },)
      setHome(false)
    }

    const handleRent = (event) =>{

      setProperty({...property,"purpose":"RT"})
      setRent(true)
      setSell(false)
      
 
    }

    const handleSell = (event) =>{
      setSell(true)
      setRent(false)
      setProperty({...property,"purpose":"SL"})

    
      
    }


    

    // const mapRef = useRef()
    return (
    <div className="flex flex-col gap-6">
        
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
home?<AddHome property={property} setProperty={setProperty}/>:<AddLand property={property} setProperty={setProperty}/>
}
</div>

{/* Map */}
<Map address={address} handleAddress={handleAddress} draggable={true}/>

<Button color="blue-gray" className="mx-6 mb-6 mt-4" type="submit">submit</Button>
</form>


</div>

    </div>
  )
}

export default AddProperty