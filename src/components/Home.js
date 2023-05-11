import Navbar from './Navbar'
import DisplayList from './DisplayList'
import ImagePage from './ImagePage'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Home() {
  const {user} = useSelector((state)=>state)
  return (
    <div>

    <Navbar/>  

    
    <ImagePage />
    <DisplayList/>
    
    </div>
  );
}

export default Home;
