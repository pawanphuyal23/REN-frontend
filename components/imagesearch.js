import Image from 'next/image'
import LoginModal from './loginmodal'
import kathmanduImage from "../public/images/2.jpg"
import {useState} from 'react'

function ImageSearch(){
    const[showModal,setShowModal] = useState(true)

    const image_style = {
        width:"100vw", 
        height:"auto",
        opacity:0.5
    
    }
    return(
    <>
    <div className='relative w-screen h-[800px]'>
        <Image src={kathmanduImage} layout='fill'/>
        <div className="absolute flex justify-center items-center w-full h-full">
            <div className="flex text-center font-bold text-6xl text-white w-5/12">
               Discover a place you'll love to live   
            </div>  
            {showModal?<LoginModal/>:<></>}
        </div>
    </div>
    </>       
    )
}


export default ImageSearch