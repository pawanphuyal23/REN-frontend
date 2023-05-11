
const initialState = {
    user:{}
}

const AppState = (state=initialState,action) =>{
    const userState = action.payload
    console.log(action.type)
    switch(action.type){
        case "LOGIN_USER": 
        console.log("rupesh")
        return {user:{userState}}

        case "LOGOUT_USER": 
        console.log("bijesh")
        localStorage.removeItem("persist:root")
        return {user:null}
    
        default: 
        return state
    }
}

export default AppState