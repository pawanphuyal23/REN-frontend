import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {RemoveUser} from "../actions/App"
import { useNavigate } from 'react-router-dom';
import LogoImage from '../assets/images/objective2.png'

import { Avatar 
    ,Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button, } from "@material-tailwind/react";
import {GrFormAdd} from 'react-icons/gr'

function Navbar() {
    const {user} = useSelector((state)=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleLogout =(e) =>{
        
        dispatch(RemoveUser())
        console.log(user)
        navigate('/')
    }
  return (

// new code start









// new code end


       <div>
        <div className="flex flex-row justify-between backdrop-blur-sm divide-y">

        {/* for home button and  menu (buy,rent,sell)*/}
    <div className="flex flex-row p-4 justify-between  items-center w-3/12">
        {
            user?<p className="font-foundationLogo text-4xl cursor-pointer" onClick={()=>{navigate('/home')}}>
            REN
        </p>:<p className="font-foundationLogo text-4xl cursor-pointer" onClick={()=>{navigate('/')}}>
            REN
        </p>
        }

       
        {/* <div className="flex items-center justify-center font-medium  hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Buy</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Sell</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Rent</p  >
        </div> */}
       

    </div>

    {/* for other features like saved house,login/sign up, */}
    <div className="flex flex-row p-4 justify-between items-center w-7/12 pl-36 divide-x-4 gap-2">
       
       <Button color="blue-gray" variant='text' className='text-black hover:bg-gray-100 hover:text-gray-700' onClick={()=>{navigate('/saved')}}>Saved Property</Button>
        {/* <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12  h-full hover:text-white cursor-pointer">
            <p className="text-lg">Saved Homes</p>
        </div> */}
<Button color="blue-gray" variant='text' className='text-black hover:bg-gray-100 hover:text-gray-700' onClick={()=>{navigate('/result')}}>Find Property</Button>
        {/* <div className="px-2 flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Find Property</p>
        </div> */}



        {


        user?<>
                <div className="mr-4">
                <Button  variant="text" className="text-black hover:bg-gray-100 hover:text-gray-700 flex items-center gap-3" onClick={()=>{navigate('/addproperty')}}>
        <GrFormAdd  className="h-5 w-5" /> List Property
      </Button>
                </div>
                <Menu>
                    <MenuHandler>
                    <div className="flex gap-4">
     
     <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="avatar" variant="circular" />
   </div>
                    </MenuHandler>
                    
                    <MenuList>
                    <MenuItem disabled>{user["userState"]["name"]}</MenuItem>
                    
                    <hr className="my-2 border-blue-gray-50" />
                        <MenuItem>Setting</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        
                    </MenuList>
                    </Menu>



        
        </>:
        <div className="flex items-center justify-center font-medium border-2 hover:bg-gray-400 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg"><NavLink to="/login">Login or Sign up</NavLink>
</p>
        </div>

}
    </div>
    
  
    </div>
    <hr class="h-px bg-black border-2 dark:bg-gray-700"/>
       </div>
  )
}

export default Navbar