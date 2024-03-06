"use client"

import React from "react"
import dynamic from "next/dynamic"

const CreateJobPostComponet = dynamic(
  () => {
    return import(
      "@/app/(routes)/create-job-post/_components/CreateJobPostComponet"
    )
  },
  { ssr: false }
)

export default function page() {
  return (
    <div>
      <CreateJobPostComponet />
    </div>
  )
}
