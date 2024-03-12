import { baseURL } from "@/assets/baseURL/baseURL";
import React from "react";
import "./viewJobs.css";
import Link from "next/link";

async function getAllJobs() {
  const posts = await fetch(baseURL + "api/v1/career/get-all", {
    next: { revalidate: 1 },
 
  });
  return posts.json();
}

const ViewJobs = async () => {
  const allJobs = await getAllJobs();

  // console.log(allJobs);
  // const detailsViewHandler = (data) => {
  //   router.push(`/career/${data.job_code}`);
  // };

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
            <th>Actions</th>
          </thead>
          {allJobs?.data?.map((data) => (
            <tr>
              <td data-label="No">{data?.id}</td>
              <td data-label="Post">{data?.job_title}</td>
              <td data-label="Department">{data?.department}</td>
              <td data-label="Experience">{data?.experience}</td>
              <td data-label="Application Deadline">
                {data.application_deadline}
              </td>
              <td>
                <Link className="job_view_btn" href={`/career/${data.job_code}`}>View</Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ViewJobs;
