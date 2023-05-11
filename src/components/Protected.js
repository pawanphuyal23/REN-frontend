import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function Protected(props) {
    const {Component} = props; 
    
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state)

    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    },[])
   
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected