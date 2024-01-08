import React from 'react'
import Product from '../../Components/Product'
import Orders from '../../Components/Order/Orders'
import Carts from '../../Components/cart/Carts';
import imgpizza from '../../../assets/images/pizza.jpeg';
import imgburger from '../../../assets/images/burger.jpeg';
import imgspagetii from '../../../assets/images/spageti.jpeg';
import './Cart.css'

const Cart = () => {
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
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>
                    <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgburger}
                    />
                    {/* <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgpizza}
                    />
                    <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgspagetii}
                    />
                    <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgburger}
                    />
                    <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgpizza}
                    />
                    <Carts 
                    name="Burger"
                    specificName="margarita pizza"
                    price="200"
                    resimg={imgspagetii}
                    /> */}
                    


                
                    <div className="back-to-shop"><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div>
                        <h5><b>Summary</b></h5>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col ps-2" >ITEMS 3</div>
                        <div className="col text-right">132.00 Birr</div>
                    </div>
                
                    <div className="row" >
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">137.00 Birr</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
        
        </div>
    </>
  )
}

export default Cart
