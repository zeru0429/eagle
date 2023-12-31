import React from 'react'
import './Food.css'
const Food = () => {
  return (
     <>
  <div class="form-container">
  <h2 class="form-title">Food Category</h2>
  <form action="process_category.php" method="POST">

    <label class="form-label" for="categoryName">Catagory Name:</label>
    <select class="form-input" id="foodName" name="foodName" required>
      <option value="">Select a food</option>
      <option value="pizza">Pizza</option>
      <option value="burger">Burger</option>
      <option value="sipagetii">Sipagetii</option>
    </select>

    <label class="form-label" for="foodId">Food:</label>
    <input class="form-input" type="number" id="foodId" name="foodId" required/>

    <label class="form-label" for="amharicName">Amharic Name:</label>
    <input class="form-input" type="text" id="amharicName" name="amharicName" required/>
      <label class="form-label" for="price">Price:</label>
    <input class="form-input" type="number" step="0.01" id="price" name="price" required/>
       <button type="submit" className="submitform">Sign In</button>
  </form>
</div>
    </>
  )
}

export default Food
