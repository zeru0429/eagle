import { useState, useEffect } from 'react';

import DataTable from '../../Components/DataTable/DataTable';
import axios from '../../../util/axios';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const columns = [
  { field: 'singleOrderId', headerName: 'ID', width: 30 },
  { field: 'orderId', headerName: 'orderId', width: 60 },
  { field: 'waiterFullName', headerName: 'Waiter', width: 150 },
  { field: 'firstname', headerName: 'firstname', width: 80 },
  { field: 'lastname', headerName: 'lastname', width: 80 }, 
  { field: 'categoryName', headerName: 'categoryName', width: 110 }, 
  { field: 'foodName', headerName: 'foodName', width: 130 }, 
  { field: 'price', headerName: 'Price', width: 80 },
  { field: 'amount', headerName: 'amount', width: 60 }, 
  { field: 'totalPrice', headerName: 'totalPrice', width: 100 }, 
  { field: 'createdDate', headerName: 'createdDate', width: 130 }, 
];

const OrdersList = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('api/orderInfo');
      // console.log(response.data.data);
      const modifiedData = response.data.data.map((order) => ({
        id: order.singleOrderId,
        ...order,
      }));
      setorders(modifiedData);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  // console.log(orders);

  return (
    <>
      <div>order</div>
      <DataTable rows={orders} columns={columns} />
    </>
  );
};


export default OrdersList