import React from 'react'
import './Waitter.css'
const Waitter = () => {
  return (
    <>

  <div class="form-container">
    <h2 class="form-title"></h2>
    <form action="process_category.php" method="POST">

      <label class="form-label" for="categoryName"> Name:</label>
      <input class="form-input" type="text" id="categoryName" name="categoryName" required/>
        <button type="submit" className="submitform">Submit</button>
        </form>
  </div>
    
    </>
  )
}

export default Waitter
