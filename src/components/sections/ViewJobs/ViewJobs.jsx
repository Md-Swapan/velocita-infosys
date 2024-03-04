"use client"
import { baseURL } from '@/assets/baseURL/baseURL';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewJobs = () => {

  const [allJob, setAllJob] = useState([]);

  useEffect(()=> {
    axios.get(baseURL+`api/v1/career/get-all`)
    .then(res=> console.log(res))
  }, [])


  return (
    <div>
      all job
    </div>
  );
};

export default ViewJobs;