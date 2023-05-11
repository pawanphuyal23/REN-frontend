


export const AddUserInformation = (user) =>{
    return{
        type:"LOGIN_USER",
        payload:user
        
    }
}

export const RemoveUser = () =>{
    return {
        type:"LOGOUT_USER",
        payload:{}
       
        
    }
}