import React from 'react'
import {useState} from 'react'
import {Button,CardBody,Input,Typography} from '@material-tailwind/react'
import {GiTap} from 'react-icons/gi'
import {GrCloudUpload} from 'react-icons/gr'
import {Card} from "@material-tailwind/react"
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BsFillHouseAddFill} from 'react-icons/bs'
function EditHome(props) {
  const property = props.property
  const setProperty = props.setProperty

  const [terai,setTerai] = useState(false)
  const [hillyMountain,setHillyMountain] = useState(false)
  const [areas,setAreas] = useState({
    area1:"Bigaa",
    area2:"Katha", 
    area3:"Dhur"
  })
  const [region,setRegion] = useState(()=>{if("area_formating"=="TE"){setTerai(true)}else{setHillyMountain(true)}})

  const handleChange = (e,regionVal) => {
    console.log(props.property)
    if(regionVal==0){ 
      setTerai(true)
      setHillyMountain(false)
      setProperty({...property,area_formating:"TE"})
      setRegion(true)
      setAreas({
        area1:"Bigaa",
        area2:"Katha", 
        area3:"Dhur"
      })
    }
    else if(regionVal==1){
      setTerai(false)
      setHillyMountain(true)
      setProperty({...property,area_formating:"HM"})
      setRegion(true)
      setAreas({
        area1:"Ropani",
        area2:"Aana", 
        area3:"Paisa"
      })
    }
  
  }

  const updateHandler = (e) =>{

    const n = e.target.name
    const img = props.img

    if(n=="title"){
      setProperty({...property,title:e.target.value})
    }
    if(n=="image"){
      console.log(e.target.files)
      setProperty({...property,uploaded_images:e.target.files})
      img(e.target.file)
    }
    if(n=="area1"){
        setProperty({...property,area1:e.target.value}) 
    }
    if(n=="area2"){
      setProperty({...property,area2:e.target.value}) 
  }
  if(n=="area3"){
    setProperty({...property,area3:e.target.value}) 
} 
if(n=="price"){
  setProperty({...property,price:e.target.value}) 
}
if(n=="floor"){
  setProperty({...property,no_of_floor:e.target.value}) 
}
if(n=="bedroom"){
  setProperty({...property,no_of_bedrooms:e.target.value}) 
}
if(n=="bathroom"){
  setProperty({...property,no_of_bathrooms:e.target.value}) 
}

if(n=="parking_space"){
  setProperty({...property,parking_area:e.target.value}) 
}

if(n=="content"){
  setProperty({...property,content:e.target.value}) 
}

if(n=="facing_side"){
  setProperty({...property,facing_side:e.target.value}) 
}

if(n=="date"){
  setProperty({...property,built_date:e.target.value}) 
}


  }

  return (
    property?<div className="flex flex-col gap-6">

    {/* year */}
<div className="flex flex-col h-5/6 w-1/6 gap-2"> 
<Typography variant="h6">Date</Typography>
<input type="date" name="date" onChange={updateHandler} value={property["built_date"]} color="blue-gray"/>
</div>

{/* property for */}
<div className="flex flex-col gap-2">

<Typography variant="h6">Region</Typography>
<div className="flex justify-between w-56 gap-2">

    <Button  variant={terai?"filled":"outlined"} onClick={e=>{handleChange(e,"0")}} color="blue-gray">
      <p>Terai</p>
    </Button>
    <Button variant={hillyMountain?"filled":"outlined"} onClick={e=>{handleChange(e,"1")}} color="blue-gray">
      <p>
      Hilly and Mountain
      </p>
    </Button>
    </div>

</div>




 {/* Area */}
<div className="flex flex-col h-5/6 w-1/6 gap-2"> 
<Typography variant="h6">Area</Typography>

<div className="flex justify-between">
<Input label={areas["area1"]} name="area1" onChange={updateHandler} value={property["area1"]} color="blue-gray"/>
<Input label={areas["area2"]} name="area2" onChange={updateHandler}  value={property["area2"]}color="blue-gray"/>
<Input label={areas["area3"]} name="area3" onChange={updateHandler} value={property["area3"]} color="blue-gray"/>
</div>

</div>


{/* Road */}
<div className="flex flex-col h-5/6 w-1/6 gap-2"> 
<Typography variant="h6">Road</Typography>
<Input label="ft" name="road" value={property["area3"]} />
</div>

{/* Road */}
<div className="flex flex-col h-5/6 w-1/6 gap-2"> 
<Typography variant="h6">Parking Space</Typography>
<Input label="sq.ft" name="parking_space" onChange={updateHandler} value={property["area3"]}/>
</div>



{/* House Features */}
<div className="flex flex-col gap-2">
   <Typography variant="h6">House Features</Typography>
<div className="grid grid-rows-2 grid-flow-col gap-4"> 

<Input label="Floor" name="floor" onChange={updateHandler} value={property["area3"]}/>
<Input label="Bedroom" name="bedroom" onChange={updateHandler} value={property["area3"]}/>
<Input label="Bathroom" name="bathroom" onChange={updateHandler} value={property["area3"]}/>



</div>

{/* <div className="grid grid-col-8 grid-flow-col gap-4 mt-4">

  
<Card className="flex justify-center px-2">

<GiTap className="" color="#259BC4" size="2rem"></GiTap>
 <Typography variant="h6">Water</Typography>

 </Card>

 <Card className="flex px-5">

<GiTap className="" color="#259BC4" size="2rem"></GiTap>
 <Typography variant="h6">Water</Typography>

 </Card>


 <Card className="flex px-5">

<GiTap className="" color="#259BC4" size="2rem"></GiTap>
 <Typography variant="h6">Water</Typography>

 </Card>


 <Card className="flex px-5">

<GiTap className="" color="#259BC4" size="2rem"></GiTap>
 <Typography variant="h6">Water</Typography>

 </Card>


 




</div> */}

<div>

  {/* <input type="file" onChange={updateHandler} name="image" multiple/> */}
{/* <Button variant="gradient" className="flex items-center gap-3">
    <GrCloudUpload className="h-5 w-5" color="#F7FBFC"/> Upload Images
  </Button> */}
</div>


<div className="flex flex-col gap-4">
<div> 
<div className="w-72">
  <Input label="Price" icon={<TbCurrencyRupeeNepalese/>} onChange={updateHandler} type="number" name="price" value={property["price"]}/>
</div>
</div>

<div> 
<div className="w-72">
  <Input label="House Direction" name="facing_side" onChange={updateHandler} value={property["facing_side"]}/>
</div>
</div>







<div> 
<div className="w-72">
  <Input label="title" name="title" onChange={updateHandler}  value={property["title"]}/>
</div>
</div>

<div> 
<div className="w-72">
  <Input label="content" name="content" onChange={updateHandler}  value={property["content"]}/>
</div>
</div>


</div>
<div> 
{/* <div className="w-72">
  <Button className="flex items-center gap-3" color='green'>
<BsFillHouseAddFill size="2rem"/>
<Typography variant="h6">Add</Typography>
  </Button>
</div> */}
</div>

</div>

</div>:<></>
  )
}

export default EditHome