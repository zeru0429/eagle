// Cart.jsx
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import Carts from '../../Components/cart/Carts';
import './Cart.css';
import { useStateValue } from '../../../Contexts/stateprovider';
import { AuthContext } from '../../../Contexts/AuthContext';
import {

  TextField,
  
  MenuItem,
} from '@mui/material';
import axios from '../../../util/axios'

const Cart = () => {

    const { isLogged, isAdmin, setIsAdmin, setIsLogged, employee } = useContext(AuthContext);
  const [{ basket }, dispatch] = useStateValue();
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [waiterId, setwaiterId] = useState();
  const [waitersList, setWaitersList] = useState([]);

  const calculateTotalPrice = () => {
    setTotalItem(basket.reduce((total, item) => total + item.amount, 0));
    setTotalPrice(basket.reduce((totalPrice, item) => totalPrice + item.amount * parseFloat(item.price), 0));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('api/waiters');
      console.log(response.data.data);
      const modifiedData = response.data.data.map((waiter) => ({
        waiterId: waiter.waiterId
        ,
        ...waiter,
      }));
      setWaitersList(modifiedData)
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);



  useEffect(() => {
    fetchData();
  }, []);


  const currentDate = moment();
  const formattedDate = currentDate.format('D MMM YYYY');
  const formattedTime = currentDate.format('h:mm:ss A');


  const handleCheckout = async () => {
    const formData = {
      userId: employee.employee_id,
      waiterId: waiterId,
      orders: basket,
      totalItem: totalItem,
      totalPrice: totalPrice


    };
    console.log(formData);
    try{
       const responce  = await axios.post('api/order',formData);
       console.log(responce.data.message        );
       window.alert(responce.data.message)
     
       

    }catch(e){
      window.alert(e.response.data.message );
    }
    handlePrint();
  
  
    
  };



  const handlePrint = () => {
    const summarySection = document.querySelector('.summary-container');
  
    if (summarySection) {
      const printWindow = window.open('', '', 'width=400,height=580'); // A7 size
  
      printWindow.document.write('<html><head>');
      // Copy styles
      document.head.querySelectorAll('style').forEach((style) => {
        printWindow.document.head.appendChild(style.cloneNode(true));
      });
  
      // Add custom styles for A7 size
      printWindow.document.write('</head><body>');
      printWindow.document.write(`
        <style>
          @media print {
            @page {
              size: A7;
              margin: 0.3cm;
            }
  
            body {
              font-size: 10px;
            }
  
            .summary-title {
              font-size: 14px;
              margin-bottom: 8px;
            }
  
            .summary-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 6px;
            }
  
            .summary-label {
              flex: 0 0 60%;
            }
  
            .summary-value {
              flex: 0 0 40%;
              text-align: right;
            }
  
            .checkout-btn {
              margin-top: 10px;
            }
          }
        </style>
      `);
  
      // Append summary content
      printWindow.document.write('</head><body>');
      printWindow.document.write(summarySection.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };
  








  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4><b>Cart </b></h4>
                </div>
                <div className="col align-self-center text-right text-muted">{totalItem} items</div>
              </div>
            </div>
            {basket.map((singleItem) => (
              <Carts
                key={singleItem.foodId}
                name={`${singleItem.amharicName} (${singleItem.foodName})`}
                specificName={singleItem.categoryName}
                price={singleItem.price}
                resimg={singleItem.imageUrl}
                count={singleItem.amount}
                foodId={singleItem.foodId}
                calculateTotalPrice={calculateTotalPrice} // Pass the function as a prop
              />
            ))}
            <div className="back-to-shop"><span className="text-muted">Back to shop</span></div>
          </div>
        <div className="col-md-4 summary">
  <div className="summary-container">
    <h5 className="summary-title">Summary</h5>
    <hr />
    <TextField
      select
      label="Waiter Name"
      value={waiterId}
      onChange={(e) => setwaiterId(e.target.value)}
      fullWidth
      className="select-field"
    >
      {waitersList.map((waiter) => (
        <MenuItem key={waiter.waiterId} value={waiter.waiterId}>
          {waiter.fullName}
        </MenuItem>
      ))}
    </TextField>
    <div className="summary-row">
      <div className="summary-label">Total Items</div>
      <div className="summary-value">{totalItem}</div>
    </div>
    <div className="summary-row">
      <div className="summary-label">Total Price</div>
      <div className="summary-value">{totalPrice.toFixed(2)} Birr</div>
    </div>
    <button className="checkout-btn" onClick={handleCheckout}>CHECKOUT</button>
    <div className="summary-row">
      <div className="summary-label">Cashier</div>
      <div className="summary-value">{employee.employee_first_name}</div>
    </div>
    <div className="summary-row">
      <div className="summary-label">Cashier ID</div>
      <div className="summary-value">{employee.employee_id}</div>
    </div>
    <div className="summary-row">
      <div className="summary-label">Order Date</div>
      <div className="summary-value">{`${formattedTime} ${formattedDate}`}</div>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
}

export default Cart;
