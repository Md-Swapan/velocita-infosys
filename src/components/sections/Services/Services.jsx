import React from "react"
import "./services.css"
import servicesData from "../../../assets/jsonData/servicesData.json"
import ServiceCard from "@/components/sections/Services/_card/ServiceCard"

export default function Services() {
  return (
    <section className="services_section">
      <div className="container">
        {/* heading */}
        <h2 className="heading">Our Services</h2>
        {/* services card container */}
        <div className="servies_card_container">
          {servicesData?.data?.map((item) => (
            <ServiceCard service={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
