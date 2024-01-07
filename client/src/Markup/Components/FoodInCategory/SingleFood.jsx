import { Avatar } from '@mui/material'
import React, { useState } from 'react'

const SingleFood = (props) => {
   const[isAdded,setIsAdded] = useState(false);
   const handleClick = ()=>{
     setIsAdded(!isAdded) 
   }

  return (
    <>
      <div class="itemImg">
      <Avatar
         alt={props.foodName}
         src={props.imageUrl}
         sx={{ width: 60, height: 60 }}
         />
      </div>
      <div className="itemDescription">
         <p className='mb-0 fs-5'>{`${props.foodName} (${props.amharicName})`}</p>
         <p className='mb-0'>{`${props.amharicName}`}</p>
         <p className='mb-0 '>{`${props.price}`}       
         { !isAdded ? <button onClick={handleClick} class="addButten addedbuttem text-light" >Add</button>
                  :
            <button onClick={handleClick} class="addButten addedbuttem bg-danger text-light" >Remove</button>
         }                
         </p>
      </div>
    </>
  )
}

export default SingleFood