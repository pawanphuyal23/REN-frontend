import React, { useEffect } from 'react'
import {useState} from 'react'
import {Card,CardBody,CardHeader,Typography,CardFooter} from '@material-tailwind/react'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BiMap} from 'react-icons/bi'
import axios from 'axios'
function SearchResult(props) {
  const setProperties = props.setProperties
  const data = props.data
  useEffect(()=>{
    console.log(data)
    axios.post("http://localhost:8000/post/search/",data).then((res)=>{
      console.log(res.data)
      setPostList(res.data)
      setProperties(res.data)
      console.log("data",postList)
console.log('got here sathi')   
 }).catch((e)=>{console.log(e)})
  },[data])
 
  const address = props.address

  const [postList,setPostList] = useState([])
  return (
   <div class="flex flex-col items-center">
     <Typography >Results</Typography>

<div className="flex flex-col items-center h-[800px] overflow-auto">
  <div className="flex flex-col gap-12 mt-14">
{
postList.map((post)=>{
return( <Card className="w-96">
<CardHeader color="blue" className="relative h-56">

  {
    post.images.length>0?<img
    src={post.images[0]["images"]}
    alt="img-blur-shadow"
    className="h-full w-full"
  />:
  <></>
  }

</CardHeader>
<CardBody className="text-center">
<Typography variant="h5" className="mb-2">
  {post.title}
</Typography>
<Typography>
  {post.content}
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

export default SearchResult 



// import React, { useEffect, useState, useRef } from 'react';
// import { Card, CardBody, CardHeader, Typography, CardFooter } from '@material-tailwind/react';
// import { TbCurrencyRupeeNepalese } from 'react-icons/tb';
// import { BiMap } from 'react-icons/bi';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// function SearchResult(props) {
//   const navigate = useNavigate()
//   const [postList, setPostList] = useState([]);
//   const [page, setPage] = useState(1);
//   const { data, setProperties } = props;
//   const { latitude, longitude, radius, area1, area2, area3, type, bedroom } = data;
//   const address = props.address;
//   const loader = useRef(null);

//   useEffect(() => {
//     setPostList([]);
//     setPage(1);
//   }, [data]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.post(`http://localhost:8000/post/search/?page=${page}`, {
//           longitude,
//           latitude,
//           radius,
//           area1,
//           area2,
//           area3,
//           type,
//           bedroom,
//         });
//         setPostList((prevPosts) => [...prevPosts, ...res.data]);
//         setProperties((prevProperties) => [...prevProperties, ...res.data]);
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     fetchData();
//   }, [data, page]);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '20px',
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver(handleObserver, options);

//     if (loader.current) {
//       observer.observe(loader.current);
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current);
//       }
//     };
//   }, []);

//   const handleObserver = (entities) => {
//     const target = entities[0];
//     if (target.isIntersecting) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <Typography>Results</Typography>
//       <div className="flex flex-col items-center h-[800px] overflow-auto">
//         <div className="flex flex-col gap-12 mt-14">
//           {postList.map((post, index) => (
//             <Card key={index} className="w-96" onClick={()=>navigate(`/property/${post.id}`)}>
//               <CardHeader color="blue" className="relative h-56">
//                 {post.images.length > 0 ? (
//                   <img src={post.images[0]['images']} alt="img-blur-shadow" className="h-full w-full" />
//                 ) : (
//                   <></>
//                 )}
//               </CardHeader>
//               <CardBody className="text-center">
//                 <Typography variant="h5" className="mb-2">
//                   {post.title}
//                 </Typography>
//                 <Typography>{post.content}</Typography>
//               </CardBody>
//               <CardFooter divider className="flex items-center justify-between py-3">
//                 <TbCurrencyRupeeNepalese />
//                 {post.price}
//                 <Typography variant="small">{post.price}</Typography>
//                 <Typography variant="small" color="gray" className="flex gap-1 items-center">
//                   <BiMap />
//                   <Typography>{post.location.split(',')[post.location.split(',').length - 3]}</Typography>
//                 </Typography>
//               </CardFooter>
//             </Card>
//           ))}
//           <div ref={loader} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchResult;

