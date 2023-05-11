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

function DisplayLand(props) {
  const property = props.property
  return (
    <div>
    <div className="flex gap-6">
</div>

{/* price section */}
<div className=''>
<Card>
<CardBody>


<div className='flex justify-center items-center gap-2'>
<TbCurrencyRupeeNepalese/>
{property["price"]}
</div>



</CardBody>
</Card>
</div>

<Card>
<CardBody>




</CardBody>
</Card>


<Card>
<CardBody>




</CardBody>
</Card>




    </div>
  )
}

export default DisplayLand