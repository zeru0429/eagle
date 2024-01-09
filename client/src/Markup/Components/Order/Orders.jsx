import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './order.css'
const Orders = (props) => {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <>
      <tr>
        <td>{props.count}</td>
        <td>{props.date}</td>
        <td>{props.username}</td>
        <td> {props.waitter}</td>
        <td>{props.items}</td>
        <td>{props.price} Birr</td>
        <td>
          {popup ? (
            <KeyboardArrowDownIcon
              className="popup-arrow"
              onClick={handleClick}
            />
          ) : (
            <ArrowForwardIosIcon
              className="popup-arrow"
              onClick={handleClick}
            />
          )}
        </td>
      </tr>
      {popup && props.detaile.length > 0 && (
        <tr>
          <td colSpan="7">
            <table className="popup-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Image</th>
                  <th>Food Name</th>
                  <th>Amharic Name</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {props.detaile.map((single) => (
                  <tr key={single.singleOrderId}>
                    <td>{single.singleOrderId}</td>
                    <td>
                      <div className="col-5">
                        <img
                          className="img-fluid"
                          src={single.imageUrl}
                          alt={single.imageUrl}
                          style={{ maxWidth: '100%', borderRadius: '50%' }}
                        />
                      </div>
                    </td>
                    <td>{single.foodName}</td>
                    <td>{single.amharicName}</td>
                    <td>{single.category}</td>
                    <td>{single.amount}</td>
                    <td>{single.singleTotal} Birr</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};

export default Orders;
