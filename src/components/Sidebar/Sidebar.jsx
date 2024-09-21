import React from 'react'
import './Sidebar.css'
import { IoIosAddCircle } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { MdBorderColor } from "react-icons/md";
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to={'/add'} className="sidebar-option">
          <IoIosAddCircle/>
          <p>Add items</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option">
          <CiBoxList/>
          <p>List items</p>
        </NavLink>
        <NavLink to={'/order'} className="sidebar-option">
          <MdBorderColor/>
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
