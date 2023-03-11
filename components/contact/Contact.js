import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";
import { MdMarkEmailRead } from "react-icons/md";
import { MdLocationOff } from "react-icons/md";
import styles from "./contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lttsshf",
        "template_chwj5y5",
        form.current,
        "B9eRXvIMGw4yENXED"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="mt-16 mb-16"
      id="contact"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <div className="text-center mb-8 text-accent-400 text-4xl font-bold">
        <h1>Get In Touch</h1>
        {/* <h1>Lets Talk</h1> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mx-auto max-w-[50rem]">
        <div className="grid gap-2 text-light-400">
          <h1 className="text-2xl font-semibold mb-2">Contact Information</h1>
          <div className="flex items-center gap-3 text-xl">
            <ImWhatsapp className="text-green-500"></ImWhatsapp>
            <h1>01891625145</h1>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <MdMarkEmailRead className="text-green-500"></MdMarkEmailRead>
            <h1>niazabir55@gmail.com</h1>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <MdLocationOff className="text-green-500"></MdLocationOff>
            <h1>Chittagong, Bangladesh</h1>
          </div>
        </div>
        {/* form div start here */}
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-10 border p-6"
          >
            <input
              className="bg-dark-500 text-white border-b outline-none focus:border-accent-400 transition-all p-2"
              type="text"
              placeholder=" Name"
              name="user_name"
            ></input>

            <input
              className="bg-dark-500 text-white border-b outline-none focus:border-accent-400 transition-all p-2"
              type="text"
              placeholder=" Email"
              name="user_email"
            ></input>
            <textarea
              name="message"
              className="bg-dark-500 text-white border-b outline-none focus:border-accent-400 transition-all p-2 resize-none overflow-hidden min-h-[8rem]"
              type="text"
              placeholder=" Message"
            ></textarea>

            <button className={`${styles.btnAll} btn rounded-none`}>
              Send Message
            </button>
            {/* 
            <button className="btn bg-accent-400 text-dark-500 hover:text-accent-400 rounded-none">
              Send Message
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
