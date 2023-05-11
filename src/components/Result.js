import React from 'react'
import Navbar from './Navbar'
import SearchResult from '../containers/SearchResult'
import SearchBar from '../containers/SearchBar'
import Map from '../utils/Map'
import {useState} from 'react'
import SearchMap from '../utils/SearchMap'
function Result() {
  const [longitude,setLongitude] = useState(84.1240)
  const [latitude,setLatitude] = useState(28.3949)
  const [displayName,setDisplayName] = useState("")
  const [properties,setProperties] = useState([])

  const [data,setData] = useState({
    "longitude":0,
    "latitude":0,
    "radius":1,
    "area1":0,
    "area2":0,
    "area3":0,
    "type":"",
    "bedroom":0
})



  const handleSearchClick = (address)=>{
    handleAddress(address)
  }

  const [address,handleAddress]=useState({
    lat:latitude,
    long:longitude,
    displayName:displayName
  })
  return (
    <div>
        <Navbar/>
{/* side result bar */}
{/* <SearchBar setLatitude={setLatitude} setLongitude={setLongitude} setDisplayName={setDisplayName}/> */}
      <SearchBar handleSearchClick={handleSearchClick} setData={setData} data={data} address={address} handleAddress={handleAddress}/>
        <div className="flex justify-center">
        
        <div>
        <SearchResult setProperties={setProperties} data={data} address={address}/>
        </div>
    
        <div className="w-2/3 h-1/3">
        <SearchMap properties={properties} draggable={false} handleAddress={handleAddress} address={address} />
        </div>

        </div>
        

    </div>
  )
}

export default Result