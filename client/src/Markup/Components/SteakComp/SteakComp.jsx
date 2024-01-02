import React from 'react'
import { Avatar } from '@mui/material';
import { useState } from 'react'
const SteakComp = (props) => {
    const [isAdded, setisAdded]=useState(false);
    const handleClick=()=>{
      setisAdded(!isAdded)
    }
  return (

    <>
      <li class="Drink">
                        
                        <div class="itemImg">
                            <Avatar
                        alt="Remy Sharp"
                        src={props.resimg}
                        sx={{ width: 60, height: 60 }}
                        />
                        </div>
                        <div className="itemDescription">
                            <p className='mb-0 fs-5'>{props.name}</p>
                            <p className='mb-0'>{props.description}</p>
                            <p className='mb-0 '>{props.price}
                             {!isAdded ? 
                             <button type='submit' class="addButten addedbuttem text-light" onClick={handleClick} >Add</button> :
                             <button type='submit' class="addButten addedbuttem bg-danger text-light" onClick={handleClick} >Remove</button> }
                             </p>
							
                        </div>
                    </li>
    </>
  )
}

export default SteakComp
