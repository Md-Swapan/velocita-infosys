import { baseURL } from "@/assets/baseURL/baseURL";
import './job-application-list.css'

export async function getJobApplicationList() {

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  let Lists = await fetch(baseURL+`api/v1/career/get-submission-by-candidate`, config,{
    next: { revalidate: 1 },
    cache: "no-store",
  })

  return Lists.json();
}




export default async function page() {
  const getJobApplicationLists = await getJobApplicationList();


  return (
    <div className="job_application_list_container m-5 p-5">
      <div className="view_jobs_section_container mt-5">
      <h2>Candidate Job Application List : </h2>
        <div className="view_jobs_content mt-5">
          <table>
            <thead>
              <th>Job Code.</th>
              <th>job Title</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Resume Link</th>
              <th>Portfolio Link</th>
              <th>Years Of Experience</th>
            </thead>
            {getJobApplicationLists?.data?.map((data) => (
              <tr>
                <td data-label="No">{data?.job_code}</td>
                <td data-label="Post">{data?.job_title}</td>
                <td data-label="Department">{data?.full_name}</td>
                <td data-label="Experience">{data?.email}</td>
                <td data-label="Application Deadline">
                  {data.phone_number}
                </td>
                <td data-label="Application Deadline">
                  {data.resume_pdf_link}
                </td>
                <td data-label="Application Deadline">
                  {data.portfolio_link}
                </td>
                <td data-label="Application Deadline">
                  {data.years_of_experience}
                </td>
                
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
