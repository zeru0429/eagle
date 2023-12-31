import React from 'react'
import imgburger from '../../../assets/images/burger.jpeg'
import imgpizza from '../../../assets/images/pizza.jpeg'
import imgspagertii from '../../../assets/images/spageti.jpeg'
import '../Drink/drink.css'
const Drink = () => {
  return (
    <>
    <div class="row row-padded">
        <div class="col-md-6">
            <div class="fh5co-food-menu to-animate-2">
                <h3 class="fh5co-drinks">Drinks</h3>
                <ul>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgburger} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Pineapple Juice</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $17.50
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgspagertii} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Green Juice</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $7.99
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgpizza} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Soft Drinks</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $12.99
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgburger} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Carlo Rosee Drinks</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $12.99
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 mt-5">
            <div class="fh5co-food-menu to-animate-2">
                <ul>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgburger} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Pineapple Juice</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $17.50
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgspagertii} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Green Juice</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $7.99
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgpizza} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Soft Drinks</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $12.99
                        </div>
                    </li>
                    <li>
                        <div class="fh5co-food-desc">
                            <figure>
                                <img src={imgburger} class="img-responsive"
                                    alt="Free HTML5 Templates by FREEHTML5.co"/>
                            </figure>
                            <div>
                                <h5>Carlo Rosee Drinks</h5>
                                <p>Far far away, behind the word mountains.</p>
                            </div>
                        </div>
                        <div class="fh5co-food-pricing">
                            $12.99
                        </div>
                    </li>
                </ul>
            </div>
        </div>
       
       
    </div>
       </>
  )
}

export default Drink
