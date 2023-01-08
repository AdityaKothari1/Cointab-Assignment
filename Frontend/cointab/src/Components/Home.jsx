import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
const Home = () => {
    const [isFetching, setIsFetching] = useState(false);
    const navigate=useNavigate()
    const handleFetch = () => {
      if (isFetching) {
        alert('Fetch is already in progress. Please wait.');
        return;
      }
      setIsFetching(true);
      axios.post("https://cointab-6oaj.onrender.com/adduser").then((res)=>{
        // alert(res.data.msg);
        setIsFetching(false);
      })
    }
    const handleDelete=()=>{
        alert('Are you Sure All Data will be deleted into the Database');
        axios.delete("https://cointab-6oaj.onrender.com/deleteusers").then((res)=>{
            alert(res.data.msg);
        })
    }
    const handleUser=()=>{
        navigate("/user")
    }
  return (
    <Box style={{width:"40%",margin:"auto",marginTop:"20px",display:"flex",gap:"30px"}}>
       <Button colorScheme={"blackAlpha"} onClick={handleFetch}>Fetch Users</Button> 
        <Button colorScheme={"blackAlpha"} onClick={handleDelete}>Delete Users</Button> 
       <Button colorScheme={"blackAlpha"} onClick={handleUser}>Users Details</Button> 
    </Box>
  )
}

export default Home