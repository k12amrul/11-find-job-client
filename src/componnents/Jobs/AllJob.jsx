import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const AllJob = () => {
   
    // const  jobs  = useLoaderData()

    const {data :jobs =[] ,isLoading ,isError ,error }=  useQuery({
      queryKey: ['allJobs',],
      queryFn: async () => {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/jobs`) 
        const data = await res.json()
        return data 
       
      },
    })

    // console.log(jobs , "allJobs")

    // const { _id, pictureUrl, jobCategory, jobTitle, jobPostingDate, loggedInUserName,
    //     loggedInUserEmail, salaryRange, jobDescription,
    //     applicationDeadline, jobApplicantsNumber
    
    //   } = jobs ||{}
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
    jobs?.map(  ( job ,ix )  =>  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    {job?.jobTitle} 
    </Table.Cell>
    
    <Table.Cell>{job?.jobPostingDate} </Table.Cell>
    <Table.Cell>{job?.applicationDeadline} </Table.Cell>
    <Table.Cell> {job?.salaryRange} </Table.Cell>
    <Table.Cell>
    <NavLink to={`/job/${job?._id}`}>
        <Button pill>Details</Button>
        </NavLink>
    </Table.Cell>
  </Table.Row> )
}

         
          </Table.Body>
        </Table>
      </div>
    );
};

export default AllJob;