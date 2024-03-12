
import { baseURL } from "@/assets/baseURL/baseURL";
import "@/app/career/career.css";
import CandidateApplicationSubmission from "@/components/sections/CandidateApplicationSubmission/CandidateApplicationSubmission";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

export async function generateStaticParams() {
  const posts = await fetch(baseURL + "api/v1/career/get-all", {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  const _posts= posts?.data?.map((post) => ({
    job_code: post.job_code.toString(),
  }));
  // console.log(_posts);
  return _posts;
}

export async function getJobPost(job_code) {
  let data = await fetch(baseURL + `api/v1/career/get-single/${job_code}`, {
    next: { revalidate: 1 },
  }).then((res) => {
    return res.json();
  });
  return data?.data;
}


const page =  async({params}) => {

  // const params = useParams();
  // const [singleJob, setSingleJob] = useState([]);

  const { job_code } = params;
  
  
  const singleJob = await getJobPost(job_code);

  // useEffect(() => {
  //   async function fetchData() {
  //     const _singleJob = await getJobPost(job_code);
  //     setSingleJob(_singleJob);
  //   }
  //   fetchData();
  // }, [job_code]);

  return (
    <div className="job_view_details_container container py-5">
      {singleJob &&
        singleJob.map((item) => (
          <div className="job_view_details_content_container ">
            <div className="job_overview_content_container">
              <div className="job_summary_container">
                <h4>Job Summary :</h4>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.job_summary,
                    }}
                  ></span>
                </div>
              </div>
              <div className="requirements">
                <h4>Requirements :</h4>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.requirements,
                    }}
                  ></span>
                </div>
              </div>
              <div className="additional_requirements">
                <h4>Additional Requirements :</h4>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.additional_requirements,
                    }}
                  ></span>
                </div>
              </div>
              <div className="responsibilities">
                <h4>Responsibilities :</h4>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.responsibilities,
                    }}
                  ></span>
                </div>
              </div>
              <div className="compensation_benefits">
                <h4>Compensation & Benefits :</h4>
                <div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.compensation_benefits,
                    }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="general_information_container">
              <h4>General Information :</h4>
              <ul>
                <li>
                  Date Posted:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.date_posted,
                    }}
                  ></span>
                </li>
                <li>
                  Application Deadline:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.application_deadline,
                    }}
                  ></span>
                </li>
                <li>
                  Job Title:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.job_title,
                    }}
                  ></span>
                </li>
                <li>
                  Job Type:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.job_type,
                    }}
                  ></span>
                </li>
                <li>
                  Email:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.email,
                    }}
                  ></span>
                </li>
                <li>
                  Phone Number:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.phone_number,
                    }}
                  ></span>
                </li>
                <li>
                  Location:{" "}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.location,
                    }}
                  ></span>
                </li>
              </ul>

              <CandidateApplicationSubmission />
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
