import React from 'react';
import imgpizza from '../../../assets/images/pizza.jpeg';
import imgburger from '../../../assets/images/burger.jpeg';
import imgspagetii from '../../../assets/images/spageti.jpeg';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Order.css';
import Orders from '../../Components/Order/Orders';
const Order = () => {
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
                        <div className="col-sm-8">
                            <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Export to
                                    Excel</span></a>
                        </div>
                    </div>
                </div>
                <div className="table-filter">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="filter-group">
                                <label>Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="filter-group">
                                <label>Status</label>
                                <select className="form-control">
                                    <option>Any</option>
                                    <option>Pending</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                            <span className="filter-icon"><i className="fa fa-filter"></i></span>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Order Date</th>
                            <th>Cashir</th>
                            <th>Net Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />
                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />
                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />
                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />
                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />
                        <Orders
                         resimg={imgpizza}
                         name="Burger"
                         date="Jun 15, 2023"
                         waitter="Abebe"
                         price="200 Birr"
                        />


                       
                            
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  );
};

export default Order;