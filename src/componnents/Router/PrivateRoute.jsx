import React, { useContext  } from 'react';

import { Navigate ,useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { Spinner } from 'flowbite-react';
// import { AuthContext } from '../cotexts/AuthProvider';

const PrivateRoute = ({children} ) => {
const location = useLocation()
// console.log(location.pathname)
    const {  user, loading, setloading } =useContext(AuthContext )

if( loading ){
    return  <Spinner aria-label="Extra large spinner example" size="xl" />
}

if ( user ){
    return children
    // setloading(false)
}


      return  <Navigate state={location.pathname} to='/login' > </Navigate>

};

export default PrivateRoute;