import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios
import { FaAddressBook } from "react-icons/fa";

const AddSkill = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Form data to be submitted
      const formDataToSubmit = {
        skill: data.skill,
      };
      console.log(formDataToSubmit);
      const response = await axios.post(
        "https://portfolio-server-black-eight.vercel.app/create-skill",
        formDataToSubmit
      ); // Replace "/api/skills" with your actual backend endpoint
      console.log("Response from server:", response.data);

      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section className="flex justify-center mt-56">
      <div className="flex flex-col">
        <h1 className="flex items-center font-semibold gap-4 pb-6 text-3xl text-[#DB2955]">
          <FaAddressBook />
          Add Your Skill
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
              {...register("skill")}
            />
          </div>

          <div>
            <button className="px-2 h-[50px] py-4 w-[300px] font-bold text-white bg-purple-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSkill;
