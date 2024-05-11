import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllJob = () => {
    console.log(import.meta.env.VITE_SOME_KEY)
    const  d = useLoaderData()
    return (
        <div>
            AllJob
            {
                console.log(d)
            }
        </div>
    );
};

export default AllJob;