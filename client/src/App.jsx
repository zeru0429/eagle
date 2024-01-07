import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import OrderList from './Markup/Pages/adminPages/OrdersList'
// components
import Header from './Markup/Components/Header/Header'
import Menu from './Markup/Pages/Menu/Menu'
import Cart from './Markup/Pages/Cart/Cart'
import Order from './Markup/Pages/Order/Order'
import Sidebar from './Markup/Components/Sidebar/SideBar'
import Login from './Markup/Pages/Login/Login'
import SignUp from './Markup/Pages/Singup/Signup'
import Addcatalog from './Markup/Components/Addcatalog/Addcatalog'
import Food from './Markup/Components/Food/Food'
import Waitter from './Markup/Components/Waitter/Waitter'
import Drink from './Markup/Pages/Drink/Drink'
import PrintPage from './Markup/Pages/PrintPage/PrintPage'

//pages
import Category from './Markup/Pages/adminPages/Category'
 import Employee from './Markup/Pages/adminPages/Employee'
 import FoodAdd from './Markup/Pages/adminPages/FoodAd'
import Waiters from './Markup/Pages/adminPages/Waiters'
import Home from './Markup/Pages/Home'
// import Waitter from './Markup/Pages/adminPages/Waitter'


function App() {

  return (
    <>
    <Header />
    <Routes>

    <Route
      path='/'
      element={<> <Home /> </>}
      />

      <Route
      path='/menu'
      element={<>   <Sidebar/> <Menu /> </>}
      />
      <Route
      path='/cart'
      element={<> <Cart/> </>}
      />
      <Route
      path='/order'
      element={<><Order/></>}
      />
    
      <Route
      path='/login'
      element={<Login/>}
      />

      <Route
      path='/print'
      element={<PrintPage/>}
      />
    
      <Route
      path='/signup'
      element={<SignUp/>}
      />
      <Route
      path='/addcatalog'
      element={<><Sidebar/> <Addcatalog/></>}
      />
      <Route
      path='/foodcatalog'
      element={<><Sidebar /> <Food/></>}
      />
      <Route
      path='/waitter'
      element={<><Sidebar /> <Waitter/></>}
      />
    
    
      <Route
      path='/drink'
      element={<><Sidebar /> <Drink/> </>}
      />


      {/* admin pages */}
{/* 
      <Route
      path='/drink'
      element={<>< Employee  /> <Category /> </>}
      /> */}

      <Route
      path='/admin/category'
      element={<><Category /> </>}
      />
        <Route
      path='/admin/food'
      element={<><FoodAdd /> </>}
      />

    <Route
          path='/admin/employee'
          element={<><Employee /> </>}
          />
      <Route
          path='/admin/waiters'
          element={<><Waiters /> </>}
          />
      <Route
          path='/admin/users'
          element={<><Employee /> </>}
          />

    <Route
          path='/admin/orders'
          element={<><OrderList /> </>}
          />

    <Route path='*'
        element={<><h1>404 page is not found</h1></>}
    
    />


    </Routes>
    </>
  )
}

export default App
