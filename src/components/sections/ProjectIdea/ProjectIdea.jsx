import React from "react"
import "./project_idea.css"
export default function ProjectIdea() {
  return (
    <section className="project_idea">
      <div className="container">
        <div className="left">
          <h2 className="project_idea_heading">Have a Project Idea ?</h2>
          <p className="para">
            We thrive on innovation and collaboration. Whether you're a startup
            with a groundbreaking concept or an established enterprise seeking
            to enhance your digital presence, we're here to turn your vision
            into reality. 
            <br />
            <br />
            groundbreaking concept or an established enterprise seeking
            to enhance your digital presence, we're here to turn your vision
            into reality.
          </p>
        </div>
        <div className="right">
          {/* form control */}
          <div className="form_control">
            <label className="input_label">Full Name</label>
            <input
              className="input_field"
              type="text"
              placeholder="Your Full Name"
            />
          </div>
          <div className="form_control_group">
            <div className="form_control">
              <label className="input_label">Company Name</label>
              <input
                className="input_field"
                type="text"
                placeholder="Your Company Name"
              />
            </div>{" "}
            <div className="form_control">
              <label className="input_label">Email *</label>
              <input
                className="input_field"
                type="text"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="form_control_group">
            <div className="form_control">
              <label className="input_label">Service Required *</label>
              <input
                className="input_field"
                type="text"
                placeholder="Select Services"
              />
            </div>{" "}
            <div className="form_control">
              <label className="input_label">Project Budget *</label>
              <input
                className="input_field"
                type="text"
                placeholder="Select Budget Range"
              />
            </div>
          </div>
          <div className="form_control">
            <label className="input_label">Project Details *</label>
            <input
              className="input_field"
              type="text"
              placeholder="Tell us more about your project"
            />
          </div>
          {/* submit button */}
          <button className="submit_button">
            Send Your opinion
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7.5L1.5 13.5622L1.5 1.43782L12 7.5Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
