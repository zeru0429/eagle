import React from 'react'

const Cart = (props) => {
  return (
    <>
      <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={props.resimg}/></div>
                        <div className="col">
                            <div className="row text-muted">{props.name}</div>
                            <div className="row">{props.specificName}</div>
                        </div>
                        <div className="col">
                            <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                        </div>
                        <div className="col">{props.price}<span className="close">Birr</span></div>
                    </div>
                </div>
    </>
  )
}

export default Cart
