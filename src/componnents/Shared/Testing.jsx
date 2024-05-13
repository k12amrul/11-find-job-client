import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Testing = () => {

    const {data =[] ,isLoading ,isError ,error }=  useQuery({
        queryKey: ['jobs',],
        queryFn: async () => {
          const res = await  fetch("http://localhost:5000/jobs" )
          const data = await res.json()
          return data 
         
        //   return data
        },
      })
      console.log(data , 'ttttt' )
    return (
        <div>
          
            tttttttttttt
        </div>
    );
};

export default Testing;