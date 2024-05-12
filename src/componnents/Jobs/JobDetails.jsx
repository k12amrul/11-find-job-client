"use client";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Card } from "flowbite-react";
// import Image from "next/image";


const JobDetails = () => {
const  data =useLoaderData()
console.log(data)
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

  const { pictureUrl ,jobTitle  ,loggedInUserName, loggedInUserEmail ,
    jobCategory ,salaryRange , jobDescription , jobPostingDate ,
    applicationDeadline ,jobApplicantsNumber 

   } =data

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 ' >
            <div className='col-span-2' >

            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className=' col-span-1 sm:p-5 space-y-4 '>
                
          
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
      
   <Button pill>Apply</Button>
    
    </div>
        </div>
    );
};

export default JobDetails;