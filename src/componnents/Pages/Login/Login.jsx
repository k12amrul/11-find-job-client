"use client";
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";






const Login = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const location = useLocation()
    const navigate = useNavigate()
    const { error,
      setError, googleLogin, githubLogin, setloading } = useContext(AuthContext)
  

    const handleLogin = (data) => {

        logIn(data.email, data.password)
          .then(result => {
            const user = result.user
            const email = data.email
            console.log(email)
            
           
    
    
    
            // reset()
            // navigate(location?.state ? location.state : '/')
            // setloading(false)
    
    
            // console.log(user)
          })
          .catch(err => {
            setError(err.message)
            console.log(err.message)
            alert(error)
            toast.error('Login error :')
    
          })
    
      }

      const handleGoogleLogin = () => {
        googleLogin()
          .then((result) => {
            toast.success('google login successfully')
            navigate(location.state ? location.state : '/')
    
    
            console.log(result)
          }
          )
          .catch((err) => console.log(err))
      }
      const handleGithubLogin = () => {
        githubLogin()
          .then((result) => {
            toast.success('github login successfully')
            navigate(location.state ? location.state : '/')
    
            console.log(result)
    
          }
          )
          .catch((err) => console.log(err))
      }


    return (
        <div  className=" grid grid-cols-1 lg:grid-cols-2 " >  
            <div  >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s" alt="" />

            </div>
            <div>
            <Card className="max-w-sm">
                    <form onSubmit={handleSubmit(handleLogin)}  className="flex flex-col gap-4">
                       
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput {...register("email")}  id="email1" type="email" placeholder="name@flowbite.com" required />
                        </div>
                        
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput  {...register("password")} id="password1" type="password" required />
                        </div>
                      

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                <Button className='  mt-1  btn btn-warning text-white bg-[#0c20f5]'> <NavLink to='/register' onClick={handleGoogleLogin} >Google Login </NavLink>  </Button>
                <Button className='  mt-1  btn btn-warning text-white bg-[#0c20f5]'> <NavLink to='/register' >Register</NavLink>  </Button>
                   
                </Card>
            </div>
        </div>
    );
};

export default Login;