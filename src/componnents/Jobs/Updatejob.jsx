
import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthProvider';
import { Label, Select } from "flowbite-react";
import Swal from 'sweetalert2'
import { AuthContext } from '../contexts/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';



const Updatejob = () => {

    const { user } = useContext(AuthContext)
    const navigate =useNavigate()

    const jobData = useLoaderData()
    console.log(jobData, '1111111' )
    const  { _id, pictureUrl ,jobTitle  ,loggedInUserName, loggedInUserEmail ,
        jobCategory ,salaryRange , jobDescription , jobPostingDate ,
        applicationDeadline ,jobApplicantsNumber 
    
       }  = jobData 

    const name = user?.displayName
    const email = user?.email

    const handleUpdateJob = (e) => {
        e.preventDefault()
        const form = e.target
        const loggedInUserName = form.name.value
        const loggedInUserEmail = form.email.value
        const pictureUrl = form.image.value
        const jobTitle = form.title.value
        // const jobTitle = form.title.value
        const salaryRange = form.salaryRange.value
        const jobDescription = form.jobDescription.value
        const jobPostingDate = form.jobPostingDate.value
        const applicationDeadline = form.applicationDeadline.value
        const jobApplicantsNumber = form.jobApplicantsNumber.value
        const jobCategory = form.jobCategory.value

        const jobData = {
         pictureUrl, jobCategory, jobTitle, jobPostingDate, loggedInUserName,
            loggedInUserEmail, salaryRange, jobDescription,
            applicationDeadline, jobApplicantsNumber

        }
        console.log(jobData)

        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/job/${_id}` ,
        
        {
            method: "PUT",
            headers: {
                // "Content-Type": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(jobData),


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
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
        <div>
            
           <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Your Job Post</h2>

                <form onSubmit={handleUpdateJob} >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                            <input id="name" disabled={true} defaultValue={name} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input id="email" disabled={true} defaultValue={email} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>


                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="">image url of the job </label>
                            <input id="image" defaultValue={pictureUrl} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation"> Job Title</label>
                            <input id="title" defaultValue={jobTitle} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="countries" value="Select your Job Category" />
                            </div>
                            {/* On Site, Remote, PartTime, Hybrid */}
                            <Select id="jobCategory" required>
                                <option>On Site</option>
                                <option>Remote</option>
                                <option>Part-Time</option>
                                <option>Hybrid</option>
                            </Select>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor=""> Salary range  </label>
                            <input id="salaryRange" defaultValue={salaryRange } type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="">Job Description </label>
                            <input id="jobDescription" defaultValue={jobDescription} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="">Job Posting Date </label>
                            <input id="jobPostingDate" defaultValue={jobPostingDate} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="">Application Deadline </label>
                            <input id="applicationDeadline" defaultValue={applicationDeadline} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor=""> Job Applicants Number </label>
                            <input id="jobApplicantsNumber" defaultValue={jobApplicantsNumber } type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>


                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Updatejob;

