import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Card,CardBody,CardHeader,Typography,CardFooter} from '@material-tailwind/react'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BiMap} from 'react-icons/bi'
import HomeImage from '../assets/images/home.jpeg'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const {user} = useSelector((state)=>state)
  const navigate = useNavigate()

  useEffect(() => {
    
    axios.get("http://localhost:8000/post/").then((res)=>{
      console.log(res.data)
      setPostList(res.data)
    })

    axios.get(`http://localhost:8000/recommendation/${user["userState"]["id"]}`).then((res)=>{
      setRecommendations(res.data)
    })
  
    
  }, [])
  const [recommendations,setRecommendations] = useState([])
  const [postList,setPostList] = useState([])
  return (
    <div className="relative">
        <Navbar/>
        <div className='flex justify-between'>
{/* recent post */}
<div className="flex flex-col gap-12 mt-14 ml-36 mr-10">
{
postList.map((post)=>{
  return( <Card className="w-4/6 h-[400px]" onClick={()=>navigate(`/property/${post.id}`)}>
  <CardHeader color="blue" className="relative h-72">
    <img
      // src={post.images[0]["images"]}
      src ={HomeImage}
      alt="img-blur-shadow"
      className="h-full w-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h5" className="mb-2 text-left">
      {post.title}
    </Typography>
    <Typography className="text-left">
      {post.content.length>100?post.content.slice(0,100)+".......":post.content}
    </Typography>
  </CardBody>
  <CardFooter divider className="flex items-center justify-between py-3">
  <TbCurrencyRupeeNepalese/>
  {post.price}

    <Typography variant="small">{post.price}</Typography>
    <Typography variant="small" color="gray" className="flex gap-1 items-center">
    <BiMap/>
<Typography>{post.location.split(",").at(-3)}</Typography>
    </Typography>
  </CardFooter>
</Card>)
})
}
</div>
<div>
</div>

<div className="fixed top-10 left-[1050px] right-0 flex flex-col gap-12 mt-14 h-[670px] w-2/6 overflow-auto  items-center">
<Typography variant="h5">Recommendation List</Typography>
{
recommendations.map((post)=>{
  return( <Card className="w-96" onClick={()=>navigate(`/property/${post.id}`)}>
  <CardHeader color="blue" className="relative h-56">
    <img
      // src={post.images[0]["images"]}
      src ={HomeImage}

      alt="img-blur-shadow"
      className="h-full w-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h5" className="mb-2 text-left">
      {post.title}
    </Typography>
    <Typography className="text-left">
      {post.content.length>100?post.content.slice(0,100)+".......":post.content}
    </Typography>
  </CardBody>
  <CardFooter divider className="flex items-center justify-between py-3">
  <TbCurrencyRupeeNepalese/>
  {post.price}

    <Typography variant="small">{post.price}</Typography>
    <Typography variant="small" color="gray" className="flex gap-1 items-center">
    <BiMap/>
<Typography>{post.location.split(",").at(-3)}</Typography>
    </Typography>
  </CardFooter>
</Card>)
})
}
</div>





        </div>

        
    </div>
  )
}

export default LandingPage


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar';
// import { useSelector } from 'react-redux';
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
//   CardFooter,
// } from '@material-tailwind/react';
// import { TbCurrencyRupeeNepalese } from 'react-icons/tb';
// import { BiMap } from 'react-icons/bi';
// import HomeImage from '../assets/images/home.jpeg';

// function LandingPage() {
//   const { user } = useSelector((state) => state);

//   const [recommendations, setRecommendations] = useState([]);
//   const [postList, setPostList] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     axios.get(`http://localhost:8000/post/?page=${page}`).then((res) => {
//       setPostList((prevPosts) => [...prevPosts, ...res.data.results]);
//       setLoading(false);
//     });

//     axios
//       .get(`http://localhost:8000/recommendation/${user.userState.id}`)
//       .then((res) => {
//         setRecommendations(res.data);
//       });
//   }, [page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//           document.documentElement.offsetHeight &&
//         !loading
//       ) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [loading]);

//   return (
//     <div className="relative">
//       <Navbar />
//       <div className="flex justify-between">
//         {/* Display recent post list */}
//         <div className="flex flex-col gap-12 mt-14 ml-36 mr-10">
//           {postList.map((post) => (
//             <Card className="w-4/6 h-[400px]" key={post.id}>
//               <CardHeader color="blue" className="relative h-72">
//                 <img
//                   src={HomeImage}
//                   alt="img-blur-shadow"
//                   className="h-full w-full"
//                 />
//               </CardHeader>
//               <CardBody className="text-center">
//                 <Typography variant="h5" className="mb-2 text-left">
//                   {post.title}
//                 </Typography>
//                 <Typography className="text-left">
//                   {post.content.length > 100
//                     ? post.content.slice(0, 100) + '....'
//                     : post.content}
//                 </Typography>
//               </CardBody>
//               <CardFooter divider className="flex items-center justify-between py-3">
//                 <TbCurrencyRupeeNepalese />
//                 {post.price}
//                 <Typography variant="small">{post.price}</Typography>
//                 <Typography
//                   variant="small"
//                   color="gray"
//                   className="flex gap-1 items-center"
//                 >
//                   <BiMap />
//                   <Typography>
//                     {post.location.split(',').at(-3)}
//                   </Typography>
//                 </Typography>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/* Display recommendation list */}
//         <div className="fixed top-10 left-[1050px] right-0 flex flex-col gap-12 mt-14 h-[670px] w-2/6 overflow-auto  items-center">
//           <Typography variant="h5">Recommendation List</Typography>
//           {recommendations.map((post) => (
//             <Card className="w-96" key={post.id
//             }>
//             <CardHeader color="blue" className="relative h-56">
//             <img
//                            src={HomeImage}
//                            alt="img-blur-shadow"
//                            className="h-full w-full"
//                          />
//             </CardHeader>
//             <CardBody className="text-center">
//             <Typography variant="h5" className="mb-2 text-left">
//             {post.title}
//             </Typography>
//             <Typography className="text-left">
//             {post.content.length > 100
//             ? post.content.slice(0, 100) + "......."
//             : post.content}
//             </Typography>
//             </CardBody>
//             <CardFooter
//                          divider
//                          className="flex items-center justify-between py-3"
//                        >
//             <TbCurrencyRupeeNepalese />
//             {post.price}
//             <Typography variant="small">{post.price}</Typography>
//             <Typography
//                            variant="small"
//                            color="gray"
//                            className="flex gap-1 items-center"
//                          >
//             <BiMap />
//             <Typography>
//             {post.location.split(",").at(-3)}
//             </Typography>
//             </Typography>
//             </CardFooter>
//             </Card>
//             ))}
//             {loading && <Typography>Loading...</Typography>}
//             {hasMore && (
//             <div className="flex justify-center">
//             <button onClick={handleLoadMore} className="btn">
//             Load More
//             </button>
//             </div>
//             )}
//             </div>
//             </div>
//             </div>
//             );
//             }
            
//             export default LandingPage;
            
            
            
            
            
