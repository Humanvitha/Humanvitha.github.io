import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import reliever from "../../public/images/reliever.png";
import headphones from "../../public/images/headphones.png";
import chat_application from "../../public/images/chat_application.jpg";
import mask from "../../public/images/mask.jpg";
import walking from "../../public/images/walking.jpg";
import irrigation from "../../public/images/irrigation.jpg";
import restaurant from "../../public/images/restaurant_booking.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const MAX_LENGTH = 100; // Maximum characters to display before showing dots

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link = "/",
  liveLink,
}) => {
  const truncateSummary = (text) => {
    if (text.length > MAX_LENGTH) {
      return text.slice(0, MAX_LENGTH) + "...";
    }
    return text;
  };

  return (
    <article
      className="w-full flex flex-col items-center justify-center relative rounded-3xl border border-solid
     border-dark bg-gradient-to-br from-light to-gray-100 shadow-md p-6 dark:bg-gradient-to-br dark:from-dark dark:to-gray-900 dark:border-light hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 h-full" // Ensured cards are equal height
    >
      <Link
        href={liveLink}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-bold">{title}</span>
          </div>
        </div>
      </Link>
      <div className="w-full flex flex-col items-start justify-between pt-6">
        <span className="text-primary font-medium text-lg dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={liveLink}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-2xl">
            {title}
          </h2>
        </Link>

        {/* Truncated summary with hover to show full */}
        <div className="relative group">
          <p className="my-2 font-medium text-dark dark:text-light text-justify sm:text-sm">
            {truncateSummary(summary)}
          </p>

          {/* Hidden full text tooltip, visible on hover */}
          {summary.length > MAX_LENGTH && (
            <p
              className="absolute top-0 left-0 bg-white dark:bg-dark p-4 border border-gray-400 shadow-xl rounded-lg z-10 w-auto 
              hidden group-hover:block text-dark dark:text-light"
              style={{ transform: "translateY(-110%)" }} // Position tooltip above the truncated text
            >
              {summary}
            </p>
          )}
        </div>

        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-full p-2 px-6 text-base font-semibold hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black shadow-md transition-all bg-black text-white dark:bg-white dark:text-black" // Dynamic button color
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects of Humanvitha</title>
        <meta
          name="description"
          content="This page is about the Projects of Humanvitha Chinnam"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* <AnimatedText
            text="My Projects"
            className="mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
          /> */}
          <AnimatedText
            text="My Projects"
            className="!text-4xl xl:!text-4xl lg:!text-3xl md:!text-3xl sm:!text-2xl mb-8"
          />
          <div className="grid grid-cols-12 gap-12 lg:gap-8 md:gap-6 sm:gap-4">
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Full Stack Application"
                link="https://reliever.vercel.app/"
                img={reliever}
                title="Social Media Application"
                liveLink="https://reliever.vercel.app/"
                summary="A video-sharing platform was developed using Next.js and TypeScript, offering a seamless multi-device experience. Optimizations in media caching reduced load times, while improvements to the search functionality enhanced the efficiency of profile and video searches."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Full Stack Application"
                link="https://hear-hub-headphones.vercel.app/"
                img={headphones}
                title="E-commerce Website"
                liveLink="https://hear-hub-headphones.vercel.app/"
                summary="An e-commerce platform was built using ReactJS and Sanity, focused on enhancing the user experience and streamlining product management. Stripe was integrated for secure payments, significantly reducing transaction failures and improving user retention."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Full Stack Application"
                link="https://drive.google.com/file/d/16mm2QfMqx17nbExz8j87MOfvkptyLtI9/view?usp=sharing"
                img={chat_application}
                title="Real-Time Chat Application"
                liveLink="https://drive.google.com/file/d/16mm2QfMqx17nbExz8j87MOfvkptyLtI9/view?usp=sharing"
                summary="A real-time chat system was developed using ReactJS and Chat Engine, incorporating features like typing indicators and read receipts. Message latency was reduced by 50%, significantly enhancing real-time communication and boosting user engagement."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Internet of Things"
                link="https://link.springer.com/chapter/10.1007/978-981-16-7330-6_39"
                img={mask}
                title="Real-Time Face Mask Detection"
                liveLink="https://link.springer.com/chapter/10.1007/978-981-16-7330-6_39"
                summary="A mask-detection system was created using OpenCV and MobileNet, achieving 95% accuracy and reducing COVID-19 exposure incidents by 35%. The system also featured face recognition for instant video-based access control, with a response time of under 100 milliseconds."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Internet of Things"
                link="https://github.com/Humanvitha/smart_irrigation_system"
                img={irrigation}
                title="Smart Irrigation System"
                liveLink="https://github.com/Humanvitha/smart_irrigation_system"
                summary="A smart irrigation system was developed using IoT technologies to monitor soil moisture and automate irrigation to optimize water use."
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Internet of Things"
                link="https://github.com/Humanvitha/smart_walking_cane_for_typhlotic"
                img={walking}
                title="Smart Walking Cane for Typhlotic"
                liveLink="https://github.com/Humanvitha/smart_walking_cane_for_typhlotic"
                summary="Developed a smart walking cane using sensors and microcontrollers to assist visually impaired individuals with obstacle detection."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <FeaturedProject
                type="Web Page"
                link="https://github.com/Humanvitha/restaurant_webpage"
                img={restaurant}
                title="Restaurant Web Page"
                liveLink="https://github.com/Humanvitha/restaurant_webpage"
                summary="Designed a responsive restaurant landing page from a Figma design, using HTML, CSS, and JavaScript."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
