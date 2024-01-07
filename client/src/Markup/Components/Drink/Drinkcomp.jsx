import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';

const Drinkcomp = (props) => {
  const[isAdded,setIsAdded] = useState(false);
const handleClick = ()=>{
  setIsAdded(!isAdded) 
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
                { !isAdded ? <button onClick={handleClick} class="addButten addedbuttem text-light" >Add</button>
                        :
                  <button onClick={handleClick} class="addButten addedbuttem bg-danger text-light" >Remove</button>
                }                
                </p>
            </div>
      </li>
    </>
  )
}

export default Drinkcomp


