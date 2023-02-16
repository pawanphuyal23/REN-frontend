function Navbar(){
return(
    // main Navbar 
    <div className="flex flex-row justify-between">

        {/* for home button and  menu (buy,rent,sell)*/}
    <div className="flex flex-row p-4 justify-between  items-center w-3/12">
        <p className="font-foundationLogo text-4xl cursor-pointer">
            REN
        </p>

       
        <div className="flex items-center justify-center font-medium  hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Buy</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Sell</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Rent</p  >
        </div>
       

    </div>

    {/* for other features like saved house,login/sign up, */}
    <div className="flex flex-row p-4 justify-between items-center w-7/12 pl-36 ">
        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12  h-full hover:text-white cursor-pointer">
            <p className="text-lg">Saved Homes</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Malpod</p>
        </div>

        <div className="flex items-center justify-center font-medium border-2 hover:bg-gray-400 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Login in or Sign up</p>
        </div>
    </div>
    </div>
)
}


export default Navbar