import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../Jobs/JobCard';


const TabCategorise = ({ jobs }) => {
    return (

        <Tabs>
            <TabList>
                <Tab>All jobs</Tab>
                <Tab>On-Site</Tab>
                <Tab>Remote </Tab>
                <Tab>Hybrid</Tab>
                <Tab>Part-Time</Tab>
            </TabList>

            <TabPanel>
                <div className='grid gap-5 grid-cols-1  mt-15 md:grid-cols-2   lg:grid-cols-3 ' >

                    {
                        jobs?.map(job => <JobCard
                            key={job?._id}
                            job={job}
                        >

                        </JobCard>)
                    }

                </div>

            </TabPanel>
            <TabPanel>
                <div className='grid gap-5 grid-cols-1  mt-15 md:grid-cols-2   lg:grid-cols-3 ' >

                    {
                        jobs?.filter(job => job.jobCategory === "On-Site").map(job => <JobCard
                            key={job?._id}
                            job={job}
                        >

                        </JobCard>)
                    }

                </div>

            </TabPanel>
            <TabPanel>
                <div className='grid gap-5 grid-cols-1  mt-15 md:grid-cols-2   lg:grid-cols-3 ' >

                    {
                        jobs?.filter(job => job.jobCategory === "Remote").map(job => <JobCard
                            key={job._id}
                            job={job}
                        >

                        </JobCard>)
                    }

                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid gap-5 grid-cols-1  mt-15 md:grid-cols-2   lg:grid-cols-3 ' >

                    {
                        jobs?.filter(job => job.jobCategory === "Hybrid").map(job => <JobCard
                            key={job._id}
                            job={job}
                        >

                        </JobCard>)
                    }

                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid gap-5 grid-cols-1 lg:mt-15 md:grid-cols-2   lg:grid-cols-3 ' >

                    {
                        jobs?.filter(job => job.jobCategory === "Part-Time").map(job => <JobCard
                            key={job._id}
                            job={job}
                        >

                        </JobCard>)
                    }

                </div>
            </TabPanel>
        </Tabs>


    );
};

export default TabCategorise;