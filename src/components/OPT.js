import React from 'react'
import Navbar from './Navbar'
import {Input,Button,Typography} from '@material-tailwind/react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate,useLocation} from 'react-router-dom';
import {useParams} from "react-router-dom"


function OPT() {
    const { userId } = useParams();
    const {state} = useLocation();


    const navigate = useNavigate()

    const email = state.email
    const [optValue,setOptValue] = useState()

    const handleSubmit = (e) =>{
        axios.post(`http://localhost:8000/auth/verifyopt/${userId}`,{otp:optValue}).then(
            (res)=>{
                navigate('/login')
            }
        )

        navigate('/login')

        e.preventDefault()
    }
  return (
    <div>
        <Navbar/>
       <div className='flex justify-center items-center w-screen h-screen h-[400px] bg-green-100'>
       <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col justify-around items-center h-[300px] w-[400px] bg-red-100">
                <div>
                    <Typography variant="h6">OTP is send in your email:{email}</Typography>
                </div>
            
            <div>
            <Typography variant="h5">Enter OPT</Typography>
            </div>
            <div>
            
            <Input onChange={(e)=>{setOptValue(e.target.value)}}/>
            </div>
            <Button value='submit' type="submit">Submit</Button>
            </div>
            
        </form>
       </div>


    </div>
  )
}

export default OPT