import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";



const Register = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    // const { register, handleSubmit, formState: { errors } } = useForm()

    const { createUser, setloading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [showPas, setShowPas] = useState(false)


    const handleRegister = (data) => {
        // e.preventDefault()
        console.log(data.email, data.password)
        // console.log(errors)
        const name = data.name
        const email = data.email
        const password = data.password
    
        const user = { name, email }
    
        // fetch('https://a-11-server-eight.vercel.app/users',{
        //     method: "POST", // or 'PUT'
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        //   })
        //   .then( res => res.json())
        //   .then( data => console.log(data ))
    
    
    
        // setError('')
        // setSuccess('')
        createUser(email, password)
    
          .then(result => {
            const user = result.user
            toast.success('Register Successfully')
            navigate(location.state ? location.state : '/')
            setSuccess('create User Success')
            setloading(false)
            // e.target.reset()
            console.log(user)
          })
          .catch(err => {
            toast.error('Register error')
            setError(err.message)
            console.log(err)
          })
    
      }


    return (


        <div className=" grid grid-cols-1 md:grid-cols-2 " >
            <div  >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s" alt="" />

            </div>
            <div>
                <Card className="max-w-sm">
                    <form onSubmit={handleSubmit(handleRegister)}  className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your name" />
                            </div>
                            <TextInput {...register("name")}  id="name1" type="text" placeholder="" required />
                        </div>
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
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your image" />
                            </div>
                            <TextInput {...register("image")}  id="email1" type="text" placeholder="name@flowbite.com" required />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button type="submit">Register</Button>
                    </form>
                <Button className='  mt-1  btn btn-warning text-white bg-[#0c20f5]'> <NavLink to='/login' >Login</NavLink>  </Button>
                    
                </Card>
            </div>
        </div>

    );
};

export default Register;