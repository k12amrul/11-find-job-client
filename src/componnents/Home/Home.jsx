import React from 'react';
import Banner from './Banner';
import TabCategorise from './TabCategorise';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// import AppliedJobs from '../Jobs/AppliedJobs';

const Home = () => {
// const jobs =useLoaderData()
//  const allJobs =[]

const {data :allJobs =[] ,isLoading ,isError ,error }=  useQuery({
    queryKey: ['jobs',],
    queryFn: async () => {
      const res = await  fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/jobs`) 
      const data = await res.json()
      return data 
     
    },
  })
//   console.log(allJobs , 'ttttt1' )


    return (
        <div>
            <Banner></Banner>
            <TabCategorise jobs={allJobs} ></TabCategorise>
        </div>
    );
};

export default Home;