import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/aboutImage.png";
import { motion } from "framer-motion";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { ParticlesContainer } from "@/components/ParticlesContainer";

const about = () => {
  return (
    <>
      <Head>
        <title>About Humanvitha</title>
        <meta
          name="description"
          content="This page is about the History of Humanvitha Chinnam"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* Main container with shadow */}
          <div
            className="flex flex-col items-center justify-between w-full lg:flex-col rounded-br-2xl rounded-3xl border border-solid
            border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
          >
            {/* Title Section: Match index.js text size */}
            <AnimatedText
              text="About Me"
              className="!text-4xl xl:!text-4xl lg:!text-3xl md:!text-3xl sm:!text-2xl mb-8"
            />

            {/* Grid for image and text */}
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              {/* Text Section */}
              <div className="col-span-5 relative flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <ParticlesContainer />

                {/* Intro Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="font-medium text-justify mb-4">
                    Hi, I’m <strong>Humanvitha</strong>, a Computer Science
                    graduate student at
                    <strong> California State University, Long Beach</strong>,
                    with a strong academic foundation and hands-on experience in
                    software engineering.
                  </p>
                  <p className="font-medium text-justify mb-4">
                    My technical expertise includes programming languages such
                    as <strong>Python, C, Java, R, JavaScript</strong>, and
                    frameworks like{" "}
                    <strong>ReactJS, Next.js, Drupal, and GraphQL</strong>. I’m
                    also well-versed in databases like{" "}
                    <strong>MySQL, MongoDB, DynamoDB</strong>, and cloud
                    platforms like <strong>AWS</strong> and <strong>GCP</strong>
                    .
                  </p>
                </motion.div>

                {/* Professional Experience Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="my-4 font-medium text-justify">
                    Professionally, I’ve gained experience as a{" "}
                    <strong>Software Engineer Intern</strong> at{" "}
                    <strong>WalletGyde</strong>, where I led the migration of
                    platforms, improving scalability and user adoption by 40%.
                    At <strong>Tata Consultancy Services</strong>, I built
                    responsive web applications, automated processes, and
                    enhanced version control workflows to accelerate project
                    delivery.
                  </p>
                </motion.div>

                {/* Leadership and Collaboration Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="font-medium text-justify">
                    I’m also passionate about leadership and collaboration.
                    Currently, as a <strong>Graduate Assistant</strong> at
                    CSULB, I manage data integrity and revamp content management
                    systems to streamline operations. My projects span from
                    e-commerce platforms to real-time communication systems.
                  </p>
                  <p className="font-medium text-justify mt-4">
                    I’m always eager to take on new challenges, contribute to
                    impactful projects, and continue growing as a full-stack
                    software engineer.
                  </p>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                className="col-span-3 relative h-max bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={profilePic}
                  alt="Humanvitha's profile"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </div>
          </div>

          {/* Skills, Experience, and Education Sections */}
          <Skill />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
