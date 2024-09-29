import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Form from "@/components/Form";
import AnimatedText from "@/components/AnimatedText";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Humanvitha</title>
        <meta
          name="description"
          content="This page is to contact Humanvitha Chinnam"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen justify-center dark:text-light">
        <Layout className="pt-16">
          <article
            className="w-full flex flex-col items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
            border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
          >
            <AnimatedText
              text="Get in Touch!"
              className="mb-16 !text-4xl xl:!text-4xl lg:!text-3xl md:!text-3xl sm:!text-2xl sm:mb-8" // Adjusted text sizes
            />
            <Form />
          </article>
        </Layout>
      </main>
    </>
  );
};

export default contact;
