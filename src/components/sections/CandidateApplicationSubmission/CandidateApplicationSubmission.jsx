import "./CandidateApplicationSubmission.css";

const CandidateApplicationSubmission = () => {
  const handleSubmit =  async (e) => {};


  return (
    <div className="candidate_application_submission_container">
      <div>
        <h3>Please fill require info with resume</h3>
      </div>
      <form >
        <div>
          <label htmlFor="">Full Name</label>
          <br />
          <input type="text" />
        </div>
        <div className="gridForm">
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="gridForm">
          <div>
            <label htmlFor="">Attach Resume pdf</label>
            <br />
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Give Portfolio Link</label>
            <br />
            <input type="text" />
          </div>
        </div>
        <div className="gridForm">
          <div>
            <label htmlFor="">Years of Experience</label>
            <br />
            <br />
            <div className="year_of_experience_checkbox">
              <input
                value="test"
                type="checkbox"
                // onChange={handleCheckChange}
              />
              <span htmlFor="">1 Year</span>
            </div>
            <div className="year_of_experience_checkbox">
              <input
                value="test"
                type="checkbox"
                // onChange={handleCheckChange}
              />
              <span htmlFor="">2 Year</span>
            </div>
            <div className="year_of_experience_checkbox">
              <input
                value="test"
                type="checkbox"
                // onChange={handleCheckChange}
              />
              <span htmlFor="">3 Year & above</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="">
            What qualifications and attributes do you believe make you and ideal
            candidate for the team lead Roll within our international call
            center
          </label>
          <br />
          <input type="text" placeholder="Your Answer" />
        </div>
        <div>
          <label htmlFor="">Cover Letter</label>
          <br />
          <input type="text" placeholder="Tell us more about your project" />
        </div>

        <button type="submit" className="create_job_submit_btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidateApplicationSubmission;
