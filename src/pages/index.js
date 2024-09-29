import Head from "next/head";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/homeImage.jpg";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { ParticlesContainer } from "@/components/ParticlesContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Humanvitha Portfolio</title>
        <meta name="description" content="A portfolio describing my projects" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-12 lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 shadow-2xl">
            <div className="w-1/2 flex flex-col items-start self-start lg:w-full lg:text-left">
              <AnimatedText
                text="Hello! 👋🏻"
                className="!text-left !text-4xl xl:!text-4xl lg:!text-3xl md:!text-3xl sm:!text-2xl"
              />
              <AnimatedText
                text="I'm Humanvitha"
                className="!text-left !text-4xl xl:!text-4xl lg:!text-3xl md:!text-3xl sm:!text-2xl mt-2"
              />

              <p className="my-4  font-medium md:text-base sm:text-sm leading-tight text-justify">
                I’m a passionate software engineer focused on building scalable,
                efficient, and user-friendly applications. With a blend of
                industry experience and academic knowledge, I enjoy solving
                complex challenges and creating impactful solutions that stand
                out.
                <br />
                <br />
                Let’s collaborate to bring innovative ideas to life and create
                solutions that leave a lasting impact!
              </p>

              <div className="flex items-center self-start mt-4 lg:self-start">
                <Link
                  aria-label="Download Humanvitha's Resume"
                  name="Resume-Link"
                  href="/Humanvitha_Chinnam_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light transition-colors md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>

            <div className="w-1/2 md:w-full relative mt-6 lg:mt-4">
              <ParticlesContainer />
              <Image
                src={profilePic}
                alt="Humanvitha"
                className="w-full h-auto rounded-lg transition-image" // Applied custom transition class
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
