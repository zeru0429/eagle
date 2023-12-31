import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
      <h2>Food Order</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item "><Link to='/'>All </Link></li>
        <li className="sidebar-menu-item "><Link to='/Drink'>Drink </Link></li>
        <li className="sidebar-menu-item "><Link to='/Steak'>Steak </Link></li>
      </ul>
    </div>
    </>
  )
}

export default SideBar
