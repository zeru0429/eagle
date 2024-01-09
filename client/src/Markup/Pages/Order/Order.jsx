import React, { useContext, useEffect, useState } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Order.css';
import Orders from '../../Components/Order/Orders';
import axios from '../../../util/axios'
import { AuthContext } from '../../../Contexts/AuthContext';

const Order = () => {
    let couter =1;
    const [orderList, setOrderList] = useState([]);

    const { isLogged, isAdmin, setIsAdmin, setIsLogged, employee } =
    useContext(AuthContext);
    useEffect(()=>{
        console.log(employee);
        fetchData();

    },[])
    const fetchData = async () => {
        try {
            console.log("employee id: " +employee.employee_id );
            const response = await axios.get(`api/order/:${employee.employee_id}`);
            console.log(response.data.data); // Log the response to check the data
            setOrderList(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

// console.log(orderList);


  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-4">
                            <h2>Order <b>Details</b></h2>
                        </div>
                  
                    </div>
                </div>
              
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>creatdDate</th>
                            <th>username</th>
                            <th>waiter</th>
                            <th>itemCount</th>
                            <th>totalPrice</th>
                           
                        </tr>
                    </thead>
                    <tbody>
        
                       {orderList && orderList.map((singleOrder)=>{
                         return <Orders
                                key={singleOrder.orderData.orderId}
                                count={couter++}
                                username={singleOrder.orderData.username}
                                date={singleOrder.orderData.createdDate}
                                waitter={singleOrder.orderData.waiter.fullName}
                                items={singleOrder.orderData.itemCount}
                                price={singleOrder.orderData.totalPrice}
                                detaile={singleOrder.orderData.singleOrders}
                                />


                       })}


                       
                            
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  );
};

export default Order;