
import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from './Pagination'
const User = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [totalPages,setTotal]=useState(1)
 
    useEffect(()=>{
         axios.get(`http://localhost:8000/getuser?page=${page}`).then((res)=>{
           setData(res.data.data)
           setTotal(res.data.totalPages)
         })
    },[page])
  return (
    <div>
         {/* <div>
            <select name="" id="" onChange={(e)=>setGender(e.target.value)}>
                <option value="">Filter By Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
         </div> */}
        <table>
            <thead>
            <tr>   
            <th>No</th>
            <th>Profile-Pic</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Contact No</th>
            <th>City</th>
            <th>Country</th>
            </tr> 
            </thead>
            <tbody>
            {data&&data.map((ele,index)=>{
              return  <tr key={index}>
                  <td>{index+1}</td>
                  <td><img src={ele.picture.medium} alt="" /></td>
                  <td>{ele.name.title+" "+ele.name.first+" "+ele.name.last}</td>
                  <td>{ele.email}</td>
                  <td>{ele.dob.age}</td>
                  <td>{ele.cell}</td>
                  <td>{ele.location.city}</td>
                  <td>{ele.location.country}</td>
                </tr>
            })}
            </tbody>
        </table>
        <Pagination currentpage={page} handlePage={setPage} totalPages={totalPages}/>
    </div>
  )
}

export default User