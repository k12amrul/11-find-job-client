import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Testing = () => {

  const navLinks = <  >
  
  <NavLink to='/home' >Home</NavLink> 
  <NavLink to='/alljobs' > Jobs</NavLink> 
  <NavLink to='/appliedjobs' > Applied-Jobs</NavLink> 
  <NavLink to='/addjob' > Add-Jobs</NavLink>
  <NavLink to='/blogs' > Blogs </NavLink> 
  
 
  {/* <li><NavLink to= {`/myjobs/${user?.email}`} > My-Jobs </NavLink> </li> */}
 

  {/* <li><NavLink to='/blogs' > Blogs</NavLink> </li> */}
  <NavLink to='/register' > Register</NavLink> 
  <NavLink to='/login' >Login</NavLink> 
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

    const {data =[] ,isLoading ,isError ,error }=  useQuery({
        queryKey: ['jobs',],
        queryFn: async () => {
          const res = await  fetch("http://localhost:5000/jobs" )
          const data = await res.json()
          return data 
         
        //   return data
        },
      })
      console.log(data , 'ttttt' )
    return (
        <div>
             <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
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
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div>
<nav className=' inline-block  '>
{navLinks }
</nav>
    </div>
        </div>
    );
};

export default Testing;