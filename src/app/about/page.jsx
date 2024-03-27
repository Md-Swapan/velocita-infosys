import Image from "next/image";
import aboutImg from "@/assets/images/about.jpg";
import missionImg from "@/assets/images/Missions.jpeg";
import visionImg from "@/assets/images/vision.jpg";
import "./about.css";


const page = () => {
  return (
    <>
      <div className="about_section_page">
        <div className="about_container container pt-5">
          <div className="about_content my-5 py-5">
            <Image src={aboutImg} width={620} />
            <div className="">
              <h1>About us</h1>
              <br />
              <p>
                Since our inception in 2014, Velocita Infosys Limited has
                embarked on a journey dedicated to delivering exceptional BPO
                solutions and IT services. Over the years, we have proudly
                served clients worldwide, leveraging the expertise of our
                skilled team and experienced management. Our commitment to
                excellence, integrity, and customer satisfaction has been the
                cornerstone of our success as we continue to innovate and exceed
                expectations in the dynamic landscape of business process
                outsourcing and technology solutions.
              </p>
            </div>
          </div>
          <div className="about_content my-5 py-5">
            <div className="">
              <h1>Mission</h1>
              <br />
              <p>
                At Velocita Infosys Limited, our mission is to empower
                businesses with innovative and cost-effective BPO solutions and
                IT services that drive growth, efficiency, and success.
              </p>
            </div>
            <Image src={missionImg} width={620} />
          </div>
          <div className="about_content my-5 py-5 ">
            <Image src={visionImg} width={620} />
            <div className="">
              <h1>Vision</h1>
              <br />
              <p>
                Our vision is to excel as a premier provider of comprehensive
                BPO solutions and IT services, renowned for our unwavering
                dedication to excellence, integrity, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="why_choose_us_container">
            <h2>Why Choose Us</h2>
            <ol>
              <li>
                <span>Expertise: </span> Our team comprises skilled professionals
                with expertise in various domains, ensuring top-notch solutions
                tailored to meet your specific needs.
              </li>
              <li>
                <span>Innovation: </span> We leverage the latest technologies and
                industry best practices to deliver innovative and efficient
                solutions that give you a competitive edge.
              </li>
              <li>
                <span>Customer-Centric Approach: </span> We prioritize customer
                satisfaction and are dedicated to delivering personalized
                services that exceed expectations.
              </li>
              <li>
                <span>Cost-Effective Solutions: </span> We offer cost-effective
                BPO solutions and IT services without compromising on quality,
                helping you maximize your ROI.
              </li>
              <li>
                <span>Reliable Partnership: </span> With Velocita Infosys
                Limited, you can trust us to be your reliable partner, providing
                support and guidance every step of the way.
              </li>
            </ol>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
