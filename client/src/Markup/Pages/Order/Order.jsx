import React from 'react';
import imgpizza from '../../../assets/images/pizza.jpeg';
import imgburger from '../../../assets/images/burger.jpeg';
import imgspagetii from '../../../assets/images/spageti.jpeg';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Order.css';
const Order = () => {
  return (
    <>
      <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-4">
                            <h2>Order <b>Details</b></h2>
                        </div>
                        <div class="col-sm-8">
                            <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE24D;</i> <span>Export to
                                    Excel</span></a>
                        </div>
                    </div>
                </div>
                <div class="table-filter">
                    <div class="row">
                        <div class="col-sm-9">
                            <div class="filter-group">
                                <label>Name</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="filter-group">
                                <label>Status</label>
                                <select class="form-control">
                                    <option>Any</option>
                                    <option>Pending</option>
                                    <option>Cancelled</option>
                                </select>
                            </div>
                            <span class="filter-icon"><i class="fa fa-filter"></i></span>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
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
                        <tr>
                            <td>1</td>
                            <td><a href="#"><img src={imgpizza} class="avatar" alt="Avatar"/>
                                    Pizza </a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td><a href="#"><img src={imgburger} class="avatar" alt="Avatar"/>
                                    Burger </a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                        <tr>
                            <td>3</td>
                            <td><a href="#"><img src={imgspagetii} class="avatar" alt="Avatar"/>
                                    Spagetii </a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                        <tr>
                            <td>4</td>
                            <td><a href="#"><img src={imgpizza} class="avatar" alt="Avatar"/>
                                    Pizza </a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                        <tr>
                            <td>5</td>
                            <td><a href="#"><img src={imgburger} class="avatar" alt="Avatar"/>
                                    Burger</a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                        <tr>
                            <td>6</td>
                            <td><a href="#"><img src={imgpizza} class="avatar" alt="Avatar"/>
                                    Pizza </a></td>
                            <td>Jun 15, 2023</td>
                            <td> Abebe</td>
                            <td>200Birr</td>
                        </tr>
                        
                            
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  );
};

export default Order;