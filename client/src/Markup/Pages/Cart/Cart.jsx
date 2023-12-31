import React from 'react'
import Product from '../../Components/Product'
import Orders from '../../Components/Order/Orders'

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
                <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgpizza}/></div>
                        <div className="col">
                            <div className="row text-muted">Pizza</div>
                            <div className="row">Margarita Pizza</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgburger}/></div>
                        <div className="col">
                            <div className="row text-muted">Burger</div>
                            <div className="row">Special Burger</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgpizza}/></div>
                        <div className="col">
                            <div className="row text-muted">Pizza</div>
                            <div className="row">Margarita Pizza</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgburger}/></div>
                        <div className="col">
                            <div className="row text-muted">Burger</div>
                            <div className="row">Special Burger</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgpizza}/></div>
                        <div className="col">
                            <div className="row text-muted">Pizza</div>
                            <div className="row">Margarita Pizza</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgburger}/></div>
                        <div className="col">
                            <div className="row text-muted">Burger</div>
                            <div className="row">Special Burger</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
                <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={imgspagetii}/></div>
                        <div className="col">
                            <div className="row text-muted">Spagetii</div>
                            <div className="row">Spagetii</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">44.00 <span className="close">Birr</span></div>
                    </div>
                </div>
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
