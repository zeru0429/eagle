import React from 'react'
import './addcatalog.css'
const Addcatalog = () => {
  return (
    <>
  <div class="form-container">
    <h2 class="form-title">Add Category</h2>
    <form action="process_category.php" method="POST">

      <label class="form-label" for="categoryName">Category Name:</label>
      <input class="form-input" type="text" id="categoryName" name="categoryName" required/>

      <label class="form-label" for="amharicName">Amharic Name:</label>
      <input class="form-input" type="text" id="amharicName" name="amharicName" required/>

      <input class="form-submit" type="submit" value="Add Category"/>
    </form>
  </div>
    </>
  )
}

export default Addcatalog
