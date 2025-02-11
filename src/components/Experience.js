import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer Intern"
            company="WalletGyde"
            companyLink="https://walletgyde.com/"
            time="June 2024 - January 2025"
            address="Denver, CO"
            work="I spearheaded the migration from Bubble.io to a scalable web application using Next.js and DynamoDB, improving user experience across devices. I also developed a Personal Loan Calculator to enhance engagement and researched AI-based matchmaking algorithms to create more personalized experiences. Additionally, I optimized the platform by implementing APIs that streamlined data retrieval and improved system performance."
          />
          <Details
            position="Graduate Assistant"
            company="CSULB"
            companyLink="https://www.csulb.edu/"
            time="March 2024-Present"
            address="Long Beach, CA"
            work="I reorganized and streamlined dataset management processes to ensure data integrity, enhancing accuracy and supporting data-driven decision-making. Additionally, I revamped a Drupal-based CMS, automating outreach for course and internship updates, which led to a significant boost in student enrollments and placements."
          />

          <Details
            position="Software Engineer"
            company="Tata Consultancy Services"
            companyLink="https://www.tcs.com/"
            time="July 2021 - August 2023"
            address="India"
            work="I crafted responsive ReactJS web pages for banking platforms, improving user experience and navigation, which significantly boosted client satisfaction. I also automated regulatory processes, reducing manual workloads and helping the client meet compliance deadlines more efficiently. By enhancing version control and adopting reusable React components, I improved team efficiency and scalability. Additionally, I implemented Jest for testing, reducing bugs and increasing reliability, while collaborating with cross-functional teams in an agile environment to accelerate project delivery."
          />

          <Details
            position="Industry 4.0 Intern"
            company="Gustovalley Technovations"
            companyLink="https://gustovalley.in/"
            time="August 2020 - September 2020"
            address="India"
            work="I developed web applications for IoT device management, enhancing data handling and system performance. Additionally, I designed user-friendly IoT applications with Blynk, improving home automation experiences through customer-focused designs."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
