"use client";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "@/app/(routes)/career/career.css"

const page = () => {
  const [singleJob, setSingleJob] = useState([]);
  const { job_code } = useParams();

  useEffect(() => {
    axios
      .get(baseURL + `api/v1/career/get-single/${job_code}`)
      .then((res) => setSingleJob(res.data.data));
  }, [job_code]);

  return (
    <div className="job_view_details_container container py-5">
      {singleJob.map((item) => (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
