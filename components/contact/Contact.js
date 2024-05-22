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
      <div className="text-4xl font-bold text-center font-primary text-accent-400">
        <h1 className="mb-4 ">Get In Touch</h1>
        <div className="flex justify-center mb-10">
          <hr className="w-24"></hr>
        </div>

        {/* <h1>Lets Talk</h1> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mx-auto max-w-[50rem]">
        <div className="grid gap-2 text-light-400">
          <h1 className="mb-2 text-2xl font-semibold">Contact Information</h1>
          <div className="flex items-center gap-3 text-xl">
            <ImWhatsapp className="text-accent-400"></ImWhatsapp>
            <h1>01891625145</h1>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <MdMarkEmailRead className="text-accent-400"></MdMarkEmailRead>
            <h1>niazabir55@gmail.com</h1>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <MdLocationOff className="text-accent-400"></MdLocationOff>
            <h1>Chittagong, Bangladesh</h1>
          </div>
        </div>
        {/* form div start here */}
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid gap-10 p-6 border"
          >
            <input
              className="p-2 text-white transition-all border-b outline-none bg-[#010b1c] focus:border-accent-400"
              type="text"
              placeholder=" Name"
              name="user_name"
            ></input>

            <input
              className="p-2 text-white transition-all border-b outline-none bg-[#010b1c] focus:border-accent-400"
              type="text"
              placeholder=" Email"
              name="user_email"
            ></input>
            <textarea
              name="message"
              className="bg-[#010b1c] text-white border-b outline-none focus:border-accent-400 transition-all p-2 resize-none overflow-hidden min-h-[8rem]"
              type="text"
              placeholder=" Message"
            ></textarea>

            <button className={`${styles.btnAll} btn rounded-none`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
