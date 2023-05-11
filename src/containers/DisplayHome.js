import React from 'react'
import {useParams} from "react-router-dom"
import Navbar from '../components/Navbar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Typography,Card,CardHeader,CardBody,CardFooter,Button} from "@material-tailwind/react"
import {FaBed,FaParking,FaBath} from 'react-icons/fa'
import {GrSteps} from 'react-icons/gr'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {GiMultiDirections} from 'react-icons/gi'
import {BsBuildingAdd} from 'react-icons/bs'

function DisplayHome(props) {
  const property = props.property
  return (
    <div className="flex flex-col gap-2">


<Card>
  <CardBody>
  <div className="flex justify-between flex-wrap gap-6">
<div>
<FaBed/>
{property["no_of_bedrooms"]}
</div>

<div>
<FaBath/>
{property["no_of_bathrooms"]}
</div>

<div>
<GrSteps/>
{property["no_of_floor"]}
</div>
<div className='flex flex-col items-center'>
<FaParking/>

{property["parking_area"]} sq. ft
</div>

<div className='flex flex-col items-center'>
<GiMultiDirections/>
{property["facing_side"]} 
</div>


</div>
  </CardBody>
</Card>

<div>
  <Typography>
    Price
  </Typography>
<div className="flex items-center">
<TbCurrencyRupeeNepalese/>
<Typography variant="h4">
  {property["price"]}
  </Typography>
</div>
</div>

<div>
  <Typography>
    Build Date
  </Typography>
<div className="flex items-center">
<Typography variant="h4">
  {property["built_date"]}
  </Typography>
</div>
</div>







    </div>
  )
}

export default DisplayHome