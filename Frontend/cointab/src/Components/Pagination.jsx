
import React from 'react'

const Pagination = ({totalPages,handlePage,currentpage}) => {
    let page=new Array(totalPages).fill(0).map((ele,index)=>{
        return <button key={index} disabled={currentpage===index+1} onClick={()=>handlePage(index+1)}>{index+1}</button>
    })
  return (
    <div>{page}</div>
  )
}

export default Pagination