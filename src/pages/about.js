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
                    Hi, I’m <strong>Humanvitha</strong>, a Quality Engineer
                    with 3+ years of experience across FinTech and enterprise
                    banking, and a Master’s in Computer Science from{" "}
                    <strong>California State University, Long Beach</strong>.
                  </p>
                  <p className="font-medium text-justify mb-4">
                    My technical expertise spans{" "}
                    <strong>Python, Java, JavaScript, and TypeScript</strong>,
                    with frameworks like{" "}
                    <strong>React, Next.js, Django, and GraphQL</strong>. I’m
                    also well-versed in databases like{" "}
                    <strong>MySQL, MongoDB, DynamoDB</strong>, and cloud
                    platforms like <strong>AWS</strong> and <strong>GCP</strong>.
                  </p>
                </motion.div>

                {/* Professional Experience Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="my-4 font-medium text-justify">
                    I’m currently a <strong>Software Engineer</strong> at{" "}
                    <strong>Barclays</strong>, where I build AI-powered
                    automation and testing platforms for enterprise credit
                    card systems — including a computer vision pipeline that
                    catches document defects with 99%+ accuracy and tooling
                    that turned a 2-day manual testing cycle into 45 minutes.
                    Earlier, as a <strong>Software Engineer Intern</strong> at{" "}
                    <strong>WalletGyde</strong>, I led a platform migration
                    that improved scalability and lifted user adoption by
                    40%, and at <strong>Tata Consultancy Services</strong>, I
                    built responsive web applications for Lloyds Bank,
                    automated compliance workflows, and improved release
                    velocity through better version control practices.
                  </p>
                </motion.div>

                {/* Leadership and Collaboration Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="font-medium text-justify">
                    What excites me most is turning messy, manual processes
                    into intelligent systems — I care about the full stack,
                    from pixel-perfect UI to the AI and automation logic
                    running underneath it. As a former{" "}
                    <strong>Graduate Assistant</strong> at CSULB, I also
                    managed data integrity and modernized content management
                    systems to streamline operations. My projects span from
                    e-commerce platforms to real-time communication systems.
                  </p>
                  <p className="font-medium text-justify mt-4">
                    I’m always eager to take on new challenges, contribute to
                    impactful projects, and continue growing at the
                    intersection of full-stack engineering and applied AI.
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
                    As a former <strong>Graduate Assistant</strong> at
CSULB, I managed data integrity and revamped content management
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
