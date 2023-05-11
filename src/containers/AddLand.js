import React from 'react'
import {useState} from 'react'
import {Button,CardBody,Input,Typography} from '@material-tailwind/react'
import {GiTap} from 'react-icons/gi'
import {GrCloudUpload} from 'react-icons/gr'
import {Card} from "@material-tailwind/react"
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BsFillHouseAddFill} from 'react-icons/bs'
function AddLand(props) {
  const property = props.property
  const setProperty = props.setProperty


  const [areas,setAreas] = useState({
    area1:"Bigaa",
    area2:"Katha", 
    area3:"Dhur"
  })

  const [terai,setTerai] = useState(false)
  const [hillyMountain,setHillyMountain] = useState(false)
  

  const handleChange = (e,regionVal) => {
    console.log(props.property)
    if(regionVal==0){ 
      setProperty({...property,area_formating:"TE"})
      setTerai(true)
      setHillyMountain(false)
      setAreas({
        area1:"Bigaa",
        area2:"Katha", 
        area3:"Dhur"
      })
    }
    else if(regionVal==1){
      setProperty({...property,area_formating:"HM"})
      setTerai(false)
      setHillyMountain(true)
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
    <div className="flex flex-col gap-6">

    

  {/* property for */}

  <div className="flex flex-col gap-2">

<Typography variant="h6">Region</Typography>
    <div className="flex justify-between w-[280px]">

        <Button className='w-2/3 h-[50px] mr-8' variant={terai?"filled":"outlined"} onClick={e=>{handleChange(e,"0")}} color="blue-gray">
          <p className="pl-[-20px]">Terai</p>
        </Button>
        <Button className='w-2/3 h-[50px]' variant={hillyMountain?"filled":"outlined"} onClick={e=>{handleChange(e,"1")}} color="blue-gray">
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
    <Input label={areas["area1"]} name="area1" onChange={updateHandler}/>
    <Input label={areas["area2"]} name="area2" onChange={updateHandler}/>
    <Input label={areas["area3"]} name="area3" onChange={updateHandler}/>
    </div>
 
    </div>


    {/* Road */}
    <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Road</Typography>
    <Input label="ft" name="road"/>
    </div>


        {/* year */}
        <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Date</Typography>
    <input type="date" name="date" onChange={updateHandler}/>
    </div>


  


    <div>

      {/* <input type="file" onChange={updateHandler} name="image" multiple/> */}
    {/* <Button variant="gradient" className="flex items-center gap-3">
        <GrCloudUpload className="h-5 w-5" color="#F7FBFC"/> Upload Images
      </Button> */}
    </div>

    <div> 
    <div className="w-72">
      <Input label="House Direction" name="facing_side" onChange={updateHandler} />
    </div>
    </div>


    <div> 
    <div className="w-72">
      <Input label="Price" icon={<TbCurrencyRupeeNepalese/>} onChange={updateHandler} type="number" name="price"/>
    </div>
    </div>




    <div> 
    <div className="w-72">
      <Input label="title" name="title" onChange={updateHandler} />
    </div>
    </div>


    <div> 
    <div className="w-72">
      <Input label="content" name="content" onChange={updateHandler} />
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
    
    
  )
}

export default AddLand