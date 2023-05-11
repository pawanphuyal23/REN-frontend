import React from 'react'
import { Input,Select,Option, Typography,Button} from "@material-tailwind/react";
import {useState} from 'react'
import axios from 'axios'
function SearchBar(props) {

  const setData = props.setData
  const data = props.data
  const address = props.address
  const handleAddress = props.handleAddress
  const [type,setType] = useState('')
  const [bedroom,setBedroom] = useState(0)
  const [area1,setArea1] = useState(0)
  const [area2,setArea2] = useState(0)
  const [area3,setArea3] = useState(0)
  const [radius,setRadius] = useState(1)
  const [long,setLong] = useState(84.726562500000000)
  const [lat,setLat] = useState(28.149503211544600)

  
const onSearchFieldHandle = (e) =>{
  setData(
    {
      "longitude":long,
      "latitude":lat,
      "radius":radius,
      "area1":area1,
      "area2":area2,
      "area3":area3,
      "type":type,
      "bedroom":bedroom
  }
  )

  e.preventDefault();
}




  const [home,setHome] = useState()
  const [locations,setLocations] = useState([])
  const handleSearchClick = props.handleSearchClick
  // const setLatitude=props.setLatitude 
  // const setLongitude=props.setLongitude 
  // const setDisplayName=props.setDisplayName

  const searchLocation = (e) =>{
    axios.get(`https://geocode.maps.co/search?q={${e.target.value}}`).then((res)=>{
      setLocations(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }


  const onClickList = (e,index) =>{
    const location = locations[index]

    setLong(location["lon"])
    setLat(location["lat"])
    // setData({...data, "longitude":location["lon"],
    // "latitude":location["lat"],})
    handleSearchClick({
      lat:location["lat"],
      long:location["lon"],
      displayName:location["display_name"]
    })
    // setLatitude(location["lat"])
    // setLongitude(location["lon"])
    // setDisplayName(location["display_name"])

  }
  return (
    <div>
      <form onSubmit={onSearchFieldHandle}>
      <div className="flex justify-around p-4">
       <div>
       <Input className="w-[300px]" variant="outlined" label="Search Location" placeholder='' onChange={(e)=>searchLocation(e)} />
       {locations?<div className={locations.length<1?"":"bg-gray-100 h-[200px] overflow-auto"}>
       {locations.map((location,index)=>{
        if(location.display_name.split(",").pop()==" Nepal")
          return(
            <li className="cursor-pointer hover:bg-gray-300" key={index} onClick={(e)=>{onClickList(e,index)}}>
              {location.display_name}
            </li>
          )
       })}
       </div>:<></>}


       </div>

       <div>
     <Select label="Type" onChange={(e)=>{setType(e)}}>
        <Option value="house">House</Option>
        <Option value="land">Land</Option>
      </Select>
     </div>





     {/* area */}
     <div className="flex flex-row gap-2">
      <div className="">
     <Input variant="outlined" label="" placeholder='Ropani' type="number" onChange={(e)=>{setArea1(e.target.value)}} />
       </div>

       <div className=''>
       <Input  variant="outlined" label="" placeholder='Aana' type="number" onChange={(e)=>{setArea2(e.target.value)}}/>
       </div>

       <div className=''>
       <Input  className='' variant="outlined" label="" placeholder='Paisa' type="number" onChange={(e)=>{setArea3(e.target.value)}}/>
       </div>
       </div>
   
     

       {type=="house"?<div>
       <Select label="Bedroom" onChange={(e)=>{setBedroom(e)}}>
        <Option value="1">1+</Option>
        <Option value="2">2+</Option>
        <Option value="3">3+</Option>
        <Option value="4">4+</Option>
        <Option value="5">5+</Option>
      </Select>
       </div>:<></>}

       <div>
        <Input label="radius" type="number" onChange={(e)=>{setRadius(e.target.value)}}/>
       </div>



<div>
<Button value="submit" type="submit">Search</Button>

</div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar




