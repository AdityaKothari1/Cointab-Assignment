
import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({totalPages,handlePage,currentpage}) => {
    let page=new Array(totalPages).fill(0).map((ele,index)=>{
        return <Button colorScheme={"blue"} key={index} disabled={currentpage===index+1} onClick={()=>handlePage(index+1)}>{index+1}</Button>
    })
  return (
    <div style={{width:"max-content",display:"flex",margin:"auto",gap:"2px"}}>{page}</div>
  )
}

export default Pagination