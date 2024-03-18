"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/adminPanel/job-application-list`);
  }, []);
  return;
};

export default page;
