import React from 'react';
import { useLoaderData } from 'react-router-dom';

// import { Button,  } from 'flowbite-react';

import { Button, Card ,Table  } from "flowbite-react";
import { NavLink } from 'react-router-dom';


const MyJobs = () => {

    const myJobs = useLoaderData()

        // console.log( myJobs )
        const { _id, pictureUrl, jobCategory, jobTitle, jobPostingDate, loggedInUserName,
            loggedInUserEmail, salaryRange, jobDescription,
            applicationDeadline, jobApplicantsNumber
        
          } = myJobs
        


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
    
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    {job?.jobTitle} 
    </Table.Cell>
    
    <Table.Cell>{job?.jobPostingDate} </Table.Cell>
    <Table.Cell>{job?.applicationDeadline} </Table.Cell>
    <Table.Cell> {job?.salaryRange} </Table.Cell>
    <Table.Cell>
    <NavLink to={`/job/update/${job?._id}`}>
        <Button  pill>Update</Button>
        </NavLink>
    </Table.Cell>
    <Table.Cell> <Button color="failure" pill>
        Delate 
      </Button></Table.Cell>
  </Table.Row> )
}

         
          </Table.Body>
        </Table>
      </div>
    );
};

export default MyJobs;
