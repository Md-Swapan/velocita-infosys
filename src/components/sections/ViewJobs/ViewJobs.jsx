"use client";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./viewJobs.css";
import { useRouter } from "next/navigation";

const ViewJobs = () => {
  const [allJob, setAllJob] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    axios
      .get(baseURL + `api/v1/career/get-all`)
      .then((res) => setAllJob(res.data.data));
  }, []);

  const detailsViewHandler = (data) => {
    router.push(`/career/${data.job_code}`);
  };

  return (
    <div className="view_jobs_section_container mt-5">
      <div className="view_jobs_content">
        <table>
          <thead>
            <th>No.</th>
            <th>Post</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Deadline</th>
          </thead>
          {allJob.map((data) => (
            <tr onClick={(e) => detailsViewHandler(data)}>
              <td data-label="No">{data.id}</td>
              <td data-label="Post">{data.job_title}</td>
              <td data-label="Department">{data.department}</td>
              <td data-label="Experience">{data.experience}</td>
              <td data-label="Application Deadline">
                {data.application_deadline}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ViewJobs;
