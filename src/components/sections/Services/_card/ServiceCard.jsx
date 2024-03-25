import React from "react"

export default function ServiceCard({ service }) {
  return (
    <div className="service_card">
      {/* image */}
      <div className="service_card_image">
        <img src={service?.image} alt="image" />
      </div>
      <div className="content">
        {/* heaidng */}
        <h2 className="heading">{service?.title}</h2>
        {/* features list */}
        <div className="list">
            <span className="list_item my-4">
              {service?.dec}
            </span>
          {/* {service.list.map((item, index) => (
            <li key={index} className="list_item">
              {item}
            </li>
          ))} */}
        </div>
        {/* button */}
        <a href={service?.link ? service?.link : "#"} className="link_btn">
          See More
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9L22 9"
              stroke="#EBEBEB"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 3.75L22.25 9L17 14.25"
              stroke="#EBEBEB"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
