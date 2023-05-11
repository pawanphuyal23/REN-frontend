import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Home from '../assets/images/home.jpeg'
import {Link} from 'react-router-dom'
import { IoEllipseSharp } from 'react-icons/io5'



function DisplayList() {
    const [posts,setPost] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/post/").then((res)=>{
            console.log(res.data)

        if(res.data.length>7){
            setPost(res.data.slice(0,7))
        }
        else{
            setPost(res.data)
        }
        }

        )
    },[])


  return (
    <>
    {
        posts?
        <div className="flex flex-col">
        <div className="flex justify-center font-bold text-5xl justify-items-center p-12">
        Recent Post
        </div>
            <div class="flex justify-around gap-3">
                {
                    posts.map((post)=>{
                        return (<div>
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

            
            <Link to={'property/' + post.id}>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><div>
            See Property
            
            </div>
            
            </button>
            </Link>
        </div>
</div>
            </div>)

                    })
                }
            </div>
    </div>
    
    :
    <></>
    }
    </>
  )
}

export default DisplayList