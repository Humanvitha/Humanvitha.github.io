import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t border-dark dark:border-light font-medium text-base dark:text-light sm:text-sm bg-transparent">
      <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-3">
        <div className="flex items-center lg:py-2">
          <span className="mr-1">Built by</span>
          <Link
            href="https://www.linkedin.com/in/humanvitha/"
            target="_blank"
            className="underline underline-offset-2 hover:text-primary dark:hover:text-primary-dark"
          >
            Humanvitha Chinnam
          </Link>
        </div>

        <Link
          href="/contact"
          className="underline underline-offset-2 hover:text-primary dark:hover:text-primary-dark"
        >
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
