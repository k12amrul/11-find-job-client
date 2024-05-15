"use client";
import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Card } from "flowbite-react";
import { AuthContext } from '../contexts/AuthProvider';
import { Label, Select } from "flowbite-react";
import Swal from 'sweetalert2'
import DatePicker from "react-datepicker";
// import Image from "next/image";


const JobDetails = () => {
const  data =useLoaderData()
console.log(data)

const { user } = useContext(AuthContext)
const [startDate, setStartDate] = useState(new Date());
const email = user?.email
const name = user?.displayName
const navigate =useNavigate()
// {
//     "pictureUrl": "[invalid URL removed]", 
//     "jobTitle": "Software Engineer",
//     "loggedInUserName": "John Doe",
//     "loggedInUserEmail": "kamrul96k@gmail.com",
//     "jobCategory": "On-Site",
//     "salaryRange": "$50,000 - $70,000 USD",
//     "jobDescription": "Develop and maintain high-quality, scalable software applications. Write clean, efficient, and well-documented code. Collaborate with cross-functional teams to design, implement, and test software solutions.",
//     "jobPostingDate": "2024-05-12",
//     "applicationDeadline": "2024-05-27",
//     "jobApplicantsNumber": 0
//   },

  const { _id, pictureUrl ,jobTitle  ,loggedInUserName, loggedInUserEmail ,
    jobCategory ,salaryRange , jobDescription , jobPostingDate ,
    applicationDeadline ,jobApplicantsNumber 

   } =data

// const handleAppliedJob= ( e)=>{

// }

const handleAppliedJob = (e) => {
  e.preventDefault()
  const form = e.target
  jobId =_id
  const developerName = form.name.value
  const developerEmail = form.email.value
  const salaryRange = form.salaryRange.value
  const applicationDeadline = form.applicationDeadline.value
  const jobApplicantsNumber = form.jobApplicantsNumber.value
  // const pictureUrl = form.image.value
  // const jobTitle = form.title.value
  // const jobTitle = form.title.value
  // const jobDescription = form.jobDescription.value
  // const jobPostingDate = form.jobPostingDate.value
  // const jobCategory = form.jobCategory.value

  const bidData = {
    jobId ,
       jobCategory,
        jobTitle, 
        jobPostingDate,
         loggedInUserEmail,

      developerEmail,
       salaryRange, 
      //  jobDescription,
      applicationDeadline, 
      jobApplicantsNumber

  }
  console.log(jobData)

  fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/job`,

      {
          method: "POST",
          headers: {
              // "Content-Type": "application/json",
              "content-type": "application/json",
          },
          body: JSON.stringify(jobData),


      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if (data.insertedId) {
              // alert('delete successfully')
              Swal.fire({
                  title: 'successful ',
                  text: 'successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
              })
              navigate(`/myjobs/${user?.email}`)

          }
      }


      )


}
 


    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 ' >
            <div className='col-span-2' >

            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
           <div className=' sm:p-5 space-y-4'>
           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {jobTitle }
      </h5>
      <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
      Salary Range : {salaryRange }
      </h5>
      <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
      Number of Applicants : { }
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
           </div>
            </div>
            <div className=' col-span-1 sm:p-5 space-y-4 '>
                
          
    
      <div>
           place a bid 
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form onSubmit={handleAppliedJob} >
                    <div className="grid grid-cols-1 gap-6 ">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                            <input id="name" disabled={true} defaultValue={name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input id="email" disabled={true} defaultValue={email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                       

                        {/* <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation"> Job Title</label>
                            <input id="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div> */}

                       

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor=""> Salary range  </label>
                            <input id="salaryRange" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                       
                        <div >
                            <label className=" text-gray-700 dark:text-gray-200" htmlFor="">Job Posting Date </label>
                           
                            <DatePicker className="rounded-md   " id="jobPostingDate" selected={startDate} onChange={(date) => setStartDate(date)} /> 
                            {/* <input id="jobPostingDate" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> */}
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="">Application Deadline </label>
                            {/* <input id="applicationDeadline" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> */}
                            <DatePicker className="rounded-md   " id="applicationDeadline" selected={startDate} onChange={(date) => setStartDate(date)} /> 
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor=""> Job Applicants Number </label>
                            <input id="jobApplicantsNumber" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>


                    <div className="flex justify-end mt-6">
                    <Button pill>Apply</Button>
                    </div>
                </form>
            </section>
        </div>
      
   
    
    </div>
        </div>
    );
};

export default JobDetails;