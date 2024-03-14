"use client";
import { useState } from "react";
import "./CandidateApplicationSubmission.css";
import toast, { Toaster } from "react-hot-toast";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";

const CandidateApplicationSubmission = ({ job_code }) => {
  const [applicationSubmit, setApplicationSubmit] = useState(false);

  const [CandidateData, setCandidateData] = useState({
    job_code: job_code,
    full_name: "",
    email: "",
    phone_number: "",
    resume_pdf_link: "",
    portfolio_link: "",
    years_of_experience: "",
    candidate_opinions: "",
    cover_letter: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setCandidateData({ ...CandidateData, [input.name]: input.value });
  };

  const handleCheckChange = (e) => {
    // console.log(e);
    // setCandidateData({ ...CandidateData, years_of_experience: `${e.target.checked}` });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = baseURL + "api/v1/career/candidate-job-submission";

    await axios.post(url, CandidateData).then((res) => {
      if (res.data.success == true) {
        notify();
        setApplicationSubmit(res.data.success);
      }
    });
  };

  const notify = () => toast.success("Application submit successfully.");

  return (
    <>
      {!applicationSubmit ? (
        <div className="candidate_application_submission_container">
          <div>
            <h3>Please fill require info with resume</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Full Name</label>
              <br />
              <input type="text" name="full_name" onChange={handleChange} />
            </div>
            <div className="gridForm">
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input type="text" name="email" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="">Phone No</label>
                <br />
                <input
                  type="text"
                  name="phone_number"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="gridForm">
              {/* <div>
            <label htmlFor="">Attach Resume pdf</label>
            <br />
            <input type="file" />
          </div> */}
              <div>
                <label htmlFor="">Resume Link</label>
                <br />
                <input
                  type="text"
                  name="resume_pdf_link"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="">Portfolio Link</label>
                <br />
                <input
                  type="text"
                  name="portfolio_link"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="gridForm">
              <div>
                <label htmlFor="">Years of Experience</label>
                <br />
                <input
                  type="text"
                  name="years_of_experience"
                  onChange={handleChange}
                />
                <div className="year_of_experience_checkbox">
                  {/* <span htmlFor="">1 Year</span> */}
                </div>
                {/* <div className="year_of_experience_checkbox">
              <input
                value="2"
                type="checkbox"
                onChange={handleCheckChange}
              />
              <span htmlFor="">2 Year</span>
            </div>
            <div className="year_of_experience_checkbox">
              <input
                value="3"
                type="checkbox"
                onChange={handleCheckChange}
              />
              <span htmlFor="">3 Year & above</span>
            </div> */}
              </div>
            </div>
            <div>
              <label htmlFor="">
                What qualifications and attributes do you believe make you and
                ideal candidate for the team lead Roll within our international
                call center
              </label>
              <br />
              <input
                type="text"
                placeholder="Your Answer"
                name="candidate_opinions"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Cover Letter</label>
              <br />
              <textarea
                type="text"
                placeholder="Your Answer"
                name="cover_letter"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="create_job_submit_btn">
              Application Submit
            </button>
          </form>

          <Toaster position="top-right" reverseOrder={false} />
        </div>
      ) : (
        <div className="application_success_content">
          <h4>Application Successfully Submit.</h4>
          <p>We will get back to you. </p>
        </div>
      )}
    </>
  );
};

export default CandidateApplicationSubmission;
