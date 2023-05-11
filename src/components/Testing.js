import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Testing() {
  const dispatch = useDispatch();
const {user} = useSelector((state)=>state)
  return (
    <div>{user["userState"]["email"]}</div>
  )
}

export default Testing