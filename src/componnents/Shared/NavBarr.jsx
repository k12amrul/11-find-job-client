
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
      <li><NavLink to='/alljobs' > Jobs</NavLink> </li>
      <li><NavLink to='/appliedjobs' > Applied-Jobs</NavLink> </li>
      <li><NavLink to='/addjob' > Add-Job</NavLink> </li>
      <li><NavLink to='/blogs' > Blog </NavLink> </li>
      
     
      <li><NavLink to= {`/myjobs/${user?.email}`} > My-Jobs </NavLink> </li>
     

      {/* <li><NavLink to='/blogs' > Blogs</NavLink> </li> */}
      <li><NavLink to='/register' > Register</NavLink> </li>
      <li><NavLink to='/login' >Login</NavLink> </li>
      {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
     {/* {
      user  && 
      <>
      <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
      </>

     } */}
      {/* <li><NavLink to='/about' >About</NavLink> </li> */}
      {/* <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label> */}

  </>


  
  return (
    <Navbar fluid rounded  className=" flex  ">
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
          <Dropdown.Item onClick={handleLogOUt} >Sign out</Dropdown.Item>
          <Dropdown.Item>{ user?.displayName} </Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
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