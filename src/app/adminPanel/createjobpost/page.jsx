"use client"

import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const CreateJobPostComponent = dynamic(
  () => {
    return import(
      "@/components/sections/CreateJobPostComponents/CreateJobPostComponent"
    )
  },
  { ssr: false }
)

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  // This useEffect will set isLoading to false once the component is loaded
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Conditionally render the loading indicator */}
      {isLoading ? (
        <h2 className="text-center text-white pt-5">Loading...</h2>
      ) : (
        <CreateJobPostComponent />
      )}
    </div>
  )
}
