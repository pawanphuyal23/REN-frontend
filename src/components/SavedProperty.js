import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Home from '../assets/images/home.jpeg'
import {Link} from 'react-router-dom'
import { IoEllipseSharp } from 'react-icons/io5'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function SavedProperty() {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state)
  let newVal = []
  const [posts,setPost] = useState([])
    useEffect(()=>{
        if(user){
          axios.get(`http://localhost:8000/savedhome/${user["userState"].id}`).then((res)=>{
          

        setPost(res.data)
            
    }
        )
        }
    },[])


  return (
    <>
    {
      
        posts?<div className="flex flex-col">
          <Navbar/>
        <div className="flex justify-center font-bold text-5xl justify-items-center p-12">
       Saved Property
        </div>
            <div class="flex justify-around gap-3">
                {
                    posts.map((post,index)=>{
                        return (<div key={index}>
            <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                
                {post.title.slice(0,10)}
                {post.title.length>11?'..':''}
                
                </h5>

                <div className='flex items-center w-[100px] h-[100px]'>
                {
                    post.images.length>0?<img src={post.images[0]["image_url"]}/>:<img src={Home}/>
                }
                </div>
            {/* <p class="text-gray-700 text-base mb-4">
            {post.content}
            </p> */}

            
            
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={()=>navigate(`/property/${post.id}`)}
            ><div>
            See Property
            
            </div>
            
            </button>
           
        </div>
</div>
            </div>)

                    })
                }
            </div>
    </div>:<></>
    }
    </>
  )
}

export default SavedProperty