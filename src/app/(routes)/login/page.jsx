"use client"
import React, { useState } from "react";

const page = () => {
  const [error, setError] = useState("");
  const [loginFailedMassage, setLoginFailedMassage] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  return (
    <div className="login_section_container">
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="admin_email"
            onChange={handleChange}
            required
          />
          <input
            type={passwordType}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
