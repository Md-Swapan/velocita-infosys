"use client";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [singleJob, setSingleJob] = useState([]);
  const { job_code } = useParams();

  useEffect(() => {
    axios
      .get(baseURL + `api/v1/career/get-single/${job_code}`)
      .then((res) => setSingleJob(res.data.data));
  }, [job_code]);

  return (
    <div className="job_view_details_container p-5">
      {singleJob.map((item) => (
        <div>
          <div className="job_summary_container">
            <h4>Job Summary</h4>
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.job_summary,
                }}
              ></span>
            </div>
          </div>
          <div className="requirements">
            <h4>Requirements</h4>
            <div>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.requirements,
                }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
