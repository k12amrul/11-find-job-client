import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const Test = () => {


  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ['jobs',],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/jobs")
      const data = await res.json()
      return data

      //   return data
    },
  })
  console.log(data, 'ttttt')


  // useQuery({
  //     queryKey: ['todos', todoId],
  //     queryFn: async () => {
  //       const data = await fetchTodoById(todoId)
  //       return data
  //     },
  //   })
  return (
    <div>
      {
        console.log(data, 'ttttt')
      }
      <h1> 111111111111111</h1>
    </div>

  );
};

export default test;
