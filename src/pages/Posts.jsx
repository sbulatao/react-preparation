import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Posts() {
  const { id } = useParams();

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);    
      console.log(data);
    }
    
    fetchPosts();
  }, []);

  return (
    <>
      {id}
    </>
  )
}
