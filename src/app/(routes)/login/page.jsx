"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/Velocita-logo1 1.png";
import Image from "next/image";
import "./login.css";
import Link from "next/link";
import { baseURL } from "@/assets/baseURL/baseURL";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = baseURL + "api/v1/auth/admin-login";

      await axios.post(url, data).then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("token", res.data.data.token);
          setTimeout(() => {
            router.push("/");
          });
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

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {!token && (
        <div className="login_section">
          <div className="login_container">
            <Image width={300} src={logo} alt="logo" />
            <div className="login_form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  required
                />

                <button type="submit">Login</button>
              </form>
            </div>

            <Link href="/">
              <button>Back To Home</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
