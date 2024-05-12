import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Button, Card } from "flowbite-react";
import { NavLink } from 'react-router-dom';


const MyJobs = () => {

    const myJobs = useLoaderData()

        console.log( myJobs )
        const { _id, pictureUrl, jobCategory, jobTitle, jobPostingDate, loggedInUserName,
            loggedInUserEmail, salaryRange, jobDescription,
            applicationDeadline, jobApplicantsNumber
        
          } = myJobs
        


    return (
        <div>
        {
            myJobs.map( job =>   <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {jobTitle}
                </h5>
                <h1>   _id {_id}</h1>
        
                <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {jobCategory}
                </h5>
                <h2> jobPostingDate : {jobPostingDate} </h2>
                <h2> applicationDeadline :{applicationDeadline} </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {jobDescription}
                </p>
                <NavLink to={`/job/${_id}`}>
                <Button pill>Details</Button>
                </NavLink>
        
              </Card>  )
        }
      
      </div>
    );
};

export default MyJobs;
