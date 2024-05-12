import React from 'react';
import Banner from './Banner';
import TabCategorise from './TabCategorise';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
const jobs =useLoaderData()
// console.log( jobs)

    return (
        <div>
            <Banner></Banner>
            <TabCategorise jobs={jobs} ></TabCategorise>
        </div>
    );
};

export default Home;