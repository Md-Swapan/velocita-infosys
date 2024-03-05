"use client";
import React, { useState } from "react";
import "./createJobPost.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const [checked, setChecked] = React.useState(false);
  const [datePosted, setDatePosted] = useState(new Date());
  const [applicationDeadline, setApplicationDeadline] = useState(new Date());
  const [jobData, setJobData] = useState({
    job_code: "",
    job_title: "",
    department: "",
    experience: "",
    job_summary: "",
    requirements: "",
    additional_requirements: "",
    responsibilities: "",
    compensation_benefits: "",
    job_type: "",
    date_posted: `${datePosted}`,
    application_deadline: `${applicationDeadline}`,
    email: "",
    phone_number: "",
    location: "",
    visible: `${checked}`,
  });
  

  // console.log(datePosted);

  const handleChange = ({ currentTarget: input }) => {
    setJobData({ ...jobData, [input.name]: input.value });
  };

  const handleCheckChange = (e) => {
    setJobData({...jobData, visible: `${e.target.checked}`});
  };

  const router = useRouter();
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const url = baseURL + "api/v1/career";
      await axios.post(url, jobData).then((res) => {
        if(res.data.success == true){
          router.push("/career");
        }
      });

    } catch (error) {

      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }

    }
  };


  return (
    <div className="create_job_post_section container">
      <div className="create_job_post_container">
        <div className="create_job_form">
          <form onSubmit={handleSubmit}>
            <div className="job_overview_form_container">
              <h4>Job Overview</h4>
              <div className="job_overview_input_container">
                <input
                  type="text"
                  placeholder="Job Code"
                  name="job_code"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  name="job_title"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Department"
                  name="department"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Experience"
                  name="experience"
                  onChange={handleChange}
                />

                <div className="mt-3">
                  <label htmlFor="">Job Summary</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Job Summary</p>"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({ ...jobData, job_summary: data });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="">Requirements</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Requirements</p>"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({ ...jobData, requirements: data });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="">Additional Requirements</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Additional Requirements</p>"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({ ...jobData, additional_requirements: data });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="">Responsibilities</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Responsibilities</p>"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({ ...jobData, responsibilities: data });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="">Compensation Benefits</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Compensation Benefits</p>"
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setJobData({ ...jobData, compensation_benefits: data });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="general_information_form_container">
              <h4>General Information</h4>
              <div className="general_information_input_container">
                <input
                  type="text"
                  placeholder="Job Type"
                  name="job_type"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Date Of Posted"
                  name="date_posted"
                  onChange={handleChange}
                />
                 
                <input
                  type="text"
                  placeholder="Application Deadline"
                  name="application_deadline"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  onChange={handleChange}
                />
              </div>
              <div className="visible_checkbox">
                <input
                  value="test"
                  type="checkbox"
                  onChange={handleCheckChange}
                />
                <span htmlFor="">Visible</span>
              </div>
            <button type="submit" className="create_job_submit_btn">
              Post Job
            </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
