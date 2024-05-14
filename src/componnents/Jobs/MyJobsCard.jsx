import { Button, Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';

const MyJobsCard = ({job ,jobs ,setJobs}) => {
    const { user } = useContext(AuthContext)
    
    const email = user?.email
    const navigate =useNavigate()
    const { _id } = job 
    console.log(job ,'10')
    const handleDelete = (id) => {
        console.log(id ,"12")

    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
           fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/job/${id}`, {
              method: 'DELETE',
              // headers: 
    
            })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  })
                 
                  navigate(`/myjobs/${user?.email}`)
                  const remaningJobs = jobs?.filter(job1  => job1._id !== id)
                 console.log( remaningJobs ,"rrrr" )
                  setJobs(remaningJobs )
    
                }
              })
    
    
    
          }
        });
    
    
      }
    return (
        
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
    <Table.Cell> <Button onClick={ ()=> handleDelete(job?._id) } color="failure" pill>
        Delate 
      </Button></Table.Cell>
  </Table.Row>
    
    );
};

export default MyJobsCard;