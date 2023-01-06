import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [isFetching, setIsFetching] = useState(false);
    const navigate=useNavigate()
    const handleFetch = () => {
      if (isFetching) {
        alert('Fetch is already in progress. Please wait.');
        return;
      }
      setIsFetching(true);
      axios.post("http://localhost:8000/adduser").then((res)=>{
        // alert(res.data.msg);
        setIsFetching(false);
      })
    }
    const handleDelete=()=>{
        alert('Are you Sure All Data will be deleted into the Database');
        axios.delete("http://localhost:8000/deleteusers").then((res)=>{
            alert(res.data.msg);
        })
    }
    const handleUser=()=>{
        navigate("/user")
    }
  return (
    <div>
       <button onClick={handleFetch}>Fetch Users</button> 
        <button onClick={handleDelete}>Delete Users</button> 
       <button onClick={handleUser}>Users Details</button> 
    </div>
  )
}

export default Home