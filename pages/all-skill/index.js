import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAddressBook } from "react-icons/fa";

const AllSkill = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios?.get("http://localhost:5000/api/v1/skill"); // Adjust the URL as per your backend API
        setSkills(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  const handleDeleteSkill = async (id) => {
    try {
      await axios?.delete(`http://localhost:5000/api/v1/delete-skill/${id}`);
      // Remove the deleted skill from the local state
      setSkills(skills?.filter((skill) => skill?._id !== id));
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <section className=" mt-14">
      <div>
        <h1 className="flex items-center font-semibold gap-4 pb-6 text-3xl text-[#DB2955]">
          <FaAddressBook />
          Watch Your Skill
        </h1>

        {/* <div className="overflow-x-auto ">
          <table className="table ">
            <thead className="">
              <tr>
                <th>No</th>
                <th>Skill</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
     
              {skills?.map((skill, index) => (
                <tr key={skill?._id} className="bg-base-200">
                  <td>{index + 1}</td>
                  <td className="text-[18px] font-semibold">{skill.skill}</td>
                  <td>
                    <button
                      className="btn bg-green"
                      onClick={() => handleDeleteSkill(skill._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <div className="grid grid-cols-4 gap-6">
          {skills?.map((skill, index) => (
            <div
              key={skill?._id}
              className="text-white border-2 border-[#DB2955] p-4 rounded-md "
            >
              <div className="flex items-center gap-4 font-bold text-[30px]">
                <h2>{index + 1}.</h2>
                <h1>{skill?.skill}</h1>
              </div>
              <div className="pt-4 ">
                <button
                  className="w-full bg-transparent btn"
                  onClick={() => handleDeleteSkill(skill._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSkill;
