"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    // Code for testing locally
    // const toastId = toast.loading("Simulating sending your message, please wait...");
    // // Mock the email sending process
    // setTimeout(() => {
    //   toast.success(
    //     "This is a test: I have received your message, but it wasn't actually sent!",
    //     {
    //       id: toastId,
    //     }
    //   );
    //   console.log("Email data sent: ", params);  // Check the email parameters in console
    // }, 1000);  // Simulate network delay
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Humanvitha Chinnam",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto flex flex-col items-center space-y-4 justify-center"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "I would love to know your Name!",
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none border border-black focus:ring-2 focus:ring-dark dark:focus:ring-white dark:text-dark"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", { required: "How can I contact you !?" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground border border-black focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-white dark:text-dark"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="Message"
          {...register("message", {
            required: "Say a few words :)",
            maxLength: {
              value: 500,
              message: "OMG! That is a lot.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground border border-black focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-white dark:text-dark"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          name="contact-button"
          variants={item}
          value="Send your message!"
          className="flex items-center dark:bg-light dark:text-dark cursor-pointer hover:dark:border-light hover:dark:bg-dark hover:dark:text-light bg-dark text-light py-1.5 px-4 rounded-md text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:py-1 md:px-3 md:text-sm"
          type="submit"
        />
      </motion.form>
    </>
  );
}
