
"use client";
import "./Navbar.css"

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const  NavBarr = () => {

  const { user, logOut } = useContext(AuthContext)

  // console.log(user?.displayName, user?.photoURL)
  const handleLogOUt = () => {
      logOut()
          .then(() => console.log('Successfully LogOUt'))
          .catch(() => console.log('error in LogOUt'))
  }


  const navLinks = <>
  
      <li><NavLink to='/home' >Home</NavLink> </li>
      <li><NavLink to='/alljobs' > All-Jobs</NavLink> </li>
      <li><NavLink to='/appliedjobs' > Applied-Jobs</NavLink> </li>
      <li><NavLink to='/addjob' > Add-Jobs</NavLink> </li>
      
     
      <li><NavLink to= {`/myjob/${user?.email}`} > My-Jobs </NavLink> </li>
     

      {/* <li><NavLink to='/blogs' > Blogs</NavLink> </li> */}
      <li><NavLink to='/register' > Register</NavLink> </li>
      <li><NavLink to='/login' >Login</NavLink> </li>
      {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
     {
      user  && 
      <>
      <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
      </>

     }
      {/* <li><NavLink to='/about' >About</NavLink> </li> */}

  </>


  
  return (
    <Navbar fluid rounded  className=" flex ">
      <Navbar.Brand href="https://flowbite-react.com">
        <img  src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Job Stock </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar title={ user?.displayName} alt="User settings"  img={user?.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOUt} >Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        {navLinks}
       </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarr