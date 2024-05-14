import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// import { Button,  } from 'flowbite-react';

import { Button, Card ,Table  } from "flowbite-react";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyJobsCard from './MyJobsCard';


const MyJobs = () => {

    const myJobs = useLoaderData()
    console.log(myJobs  ,'myjob')
    const [  jobs ,setJobs ] =useState(myJobs  )


        // console.log( myJobs )
        // const { _id, pictureUrl, jobCategory, jobTitle, jobPostingDate, loggedInUserName,
        //     loggedInUserEmail, salaryRange, jobDescription,
        //     applicationDeadline, jobApplicantsNumber
        
        //   } = myJobs

          // const handleDelete = (id) => {

          //   // console.log(id)
        
          //   Swal.fire({
          //     title: "Are you sure?",
          //     text: "You won't be able to revert this!",
          //     icon: "warning",
          //     showCancelButton: true,
          //     confirmButtonColor: "#3085d6",
          //     cancelButtonColor: "#d33",
          //     confirmButtonText: "Yes, delete it!"
          //   }).then((result) => {
          //     if (result.isConfirmed) {
        
          //      fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/job/${id}`, {
          //         method: 'DELETE',
          //         // headers: 
        
          //       })
          //         .then(res => res.json())
          //         .then(data => {
          //           console.log(data)
          //           if (data.deletedCount > 0) {
          //             Swal.fire({
          //               title: "Deleted!",
          //               text: "Your file has been deleted.",
          //               icon: "success"
          //             })
                     
          //             const remaningJobs = jobs?.filter(job  => job._id !== id)
          //            console.log( remaningJobs )
          //             setJobs(remaningJobs )
        
          //           }
          //         })
        
        
        
          //     }
          //   });
        
        
          // }
        


    return (
        <div className="overflow-x-auto   ">
        <Table striped>
          <Table.Head>
            <Table.HeadCell> Job Title</Table.HeadCell>
            <Table.HeadCell>Job Posting Date</Table.HeadCell>
            <Table.HeadCell>Application Deadline</Table.HeadCell>
            <Table.HeadCell>Salary Range</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
{
    myJobs?.map(  ( job ,ix )  =>  
    
   <MyJobsCard 
   job={job}
   key={ix}
   jobs={jobs}
   setJobs={setJobs}

   > </MyJobsCard>

)
}

         
          </Table.Body>
        </Table>
      </div>
    );
};

export default MyJobs;
