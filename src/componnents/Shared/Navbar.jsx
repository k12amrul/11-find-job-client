import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../contexts/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // console.log(user?.displayName, user?.photoURL)
    const handleLogOUt = () => {
        logOut()
            .then(() => console.log('Successfully LogOUt'))
            .catch(() => console.log('error in LogOUt'))
    }

    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV0vdfGCjIlcD0LdVuAP3yeB0GMNp0cVJAPZm-HbTohNttxwDszvCCkajLQ&s'

    const navLinks = <>
        <li><NavLink to='/home' >Home</NavLink> </li>
        <li><NavLink to='/allJobs' > All-Jobs</NavLink> </li>
        <li><NavLink to='/appliedJobs' > Applied-Jobs</NavLink> </li>
        <li><NavLink to='/addJob' > Add-Jobs</NavLink> </li>
        
       
        <li><NavLink to= {`/myjob/${user?.email}`} > My-Jobs </NavLink> </li>
       

        <li><NavLink to='/blogs' > Blogs</NavLink> </li>
        <li><NavLink to='/register' > Register</NavLink> </li>
        <li><NavLink to='/login' >Login</NavLink> </li>
        {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
       {
        user  && 
        <>
        <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
        {/* <li><NavLink to='/profile' >   Profile </NavLink> </li> */}
        </>

       }
        {/* <li><NavLink to='/about' >About</NavLink> </li> */}

    </>
    return (
        <div className=' mb-20' >

       
        <div className="navbar bg-base-200   ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }


                    </ul>
                </div>
                <div>

               <img className=' h-10 mr-2 ' src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.webp" alt="" />
                </div>
               <h2 >   Job Stock </h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      {
        user && 
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button>
        </li>
        {/* <li><button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button></li> */}
        <li>{user?.displayName} </li>
      </ul>

}
    </div>

            </div>
        </div>

        {/* ---------------------- */}
       

        </div>

    );
};

export default Navbar;