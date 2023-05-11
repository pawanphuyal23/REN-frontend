import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import BackgroundImage from '../assets/images/home.jpeg'
import {Typography,Card,CardHeader,CardBody,CardFooter,Button,Chip,Carouselsour} from "@material-tailwind/react"
import {FaBed,FaParking,FaBath} from 'react-icons/fa'
import {GrSteps} from 'react-icons/gr'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {GiMultiDirections} from 'react-icons/gi'
import {BsBuildingAdd} from 'react-icons/bs'
import DisplayHome from '../containers/DisplayHome'
import DisplayLand from "../containers/DisplayLand"
import { useSelector } from 'react-redux';
import { prototype } from 'form-data'
import {Link} from 'react-router-dom'
import {FiMapPin} from 'react-icons/fi'
import ImageCarousel from '../containers/ImageCarousel'
import { useNavigate } from 'react-router-dom';
import {TiHeartFullOutline} from 'react-icons/ti'



function DisplayProperty() {
  const navigate = useNavigate()

  const PROPERTY_TYPE = {
    "H":"HOUSE",
    "L":"LAND"
  }
  const [like,setLike] = useState(false)
  const {user} = useSelector((state)=>state)
  const [property,setProperty] = useState()
  const { propertyId } = useParams();
  console.log(propertyId)
  useEffect(()=>{
     axios.get(`http://localhost:8000/post/${propertyId}/`).then((res)=>{
      setProperty(res.data)
      if(user){
        axios.get(`http://localhost:8000/savedhome/${user["userState"].id}/${propertyId}`).then((res)=>{
          if(res.status==200){
            setLike(true)
          }
          else if(res.status==204){
            setLike(false)
          }
        })  
      

       
          axios.post("http://localhost:8000/addrecommendation/",{user:user["userState"].id,post:propertyId}).then((res)=>{
            console.log("recommendation added")
          })
        
      }
     
    })
  },[])


  const handleLike = (e) =>{

    if(!user["userState"]){
      navigate('/login')
    }
    if(like){
      axios.delete(`http://localhost:8000/savedhome/${user["userState"].id}/${propertyId}`).then((res)=>{
        setLike(false)
      }) 
    }
    else{
      axios.post(`http://localhost:8000/savedhome/${user["userState"].id}/${propertyId}`).then((res)=>{
        setLike(true)
      }) 
    }
  }
  return (
    <>
    {property?<div>

      {/* <Carousel> */}
{/* <img
        src={property["images"][0]}
        alt="image 3"
        className="h-full w-full object-cover"
      /> */}
{/* </Carousel> */}
    <Navbar/>
    <div className="flex flex-col justify-items-end">
    <Card className="flex justify-center items-center ">

    <ImageCarousel images={property["images"]}/>
    {/* <img className="object-contain px-10 h-96 w-10/12 pb-2" src={property["images"][0]["images"]}/> */}
    </Card>
   
{/* body part */}
   <div className="flex justify-around h-96">

{/* side [description,title] */}
    <div className="">
    <Card className="mt-2 h-80 w-[1200px]">
    
    <CardHeader>
    
    </CardHeader>
    <CardBody>

      <div className="flex items-center my-3 gap-2 justify-between">
     <div className="flex items-center my-3 gap-2">
     <FiMapPin/>
      {property["location"]}
     </div>
      <TiHeartFullOutline color={like?"red":"black"} size={30} onClick={handleLike} className="cursor-grab"/>

      </div>
      
      
 
      
    
    <Chip color="teal" value={property?PROPERTY_TYPE[property["property_type"]]:PROPERTY_TYPE[property["property_type"]]} />
    <Typography variant="h2">{property["title"]}</Typography>
    <Typography>
      <Typography variant="h6">Description:</Typography>
   {property["content"]}
    </Typography>
    </CardBody>
    <CardFooter>
      </CardFooter>
    </Card>
    </div>
{/* side contains user information and house information */}
  <div>
  <div className="mt-2 w-64">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<Typography variant="h5">
Owner :
</Typography>
<Typography>
{property["author"]}
</Typography>

</div>
{ property["property_type"]==="H"?<DisplayHome property={property}/>:<><DisplayLand property={property}/></>
}

  {user && user["userState"]["id"]==property["author"]?
  

  <Button onClick={()=>navigate(`/edit/${property["id"]}`)}>

  Edit
  
  </Button>
  :<Button>
  Interested
  </Button>}


</div>
    </div>
  </div>

   </div>

         
    </div>


</div>:<></>  
  }
    </>
  )
}

export default DisplayProperty