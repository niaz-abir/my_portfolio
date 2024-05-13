/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProject = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios?.get(
          "http://localhost:5000/api/v1/project"
        ); // Adjust the URL as per your backend API
        setSkills(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  const handleDeleteSkill = async (id) => {
    try {
      await axios?.delete(`http://localhost:5000/api/v1/delete-project/${id}`);
      // Remove the deleted skill from the local state
      setSkills(skills?.filter((skill) => skill?._id !== id));
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };
  return (
    <section className="mt-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>image</th>
              <th>Name</th>
              <th>tools</th>
              <th>client</th>
              <th>server</th>
              <th>live</th>
              <th>start</th>
              <th>end</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {skills?.map((skill, index) => (
              <tr key={skill?._id} className="bg-base-200">
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img src={skill?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{skill?.name}</td>
                <td>{skill?.tools},Express,Mongoose</td>
                <td>{skill?.clientRepo}</td>
                <td>{skill?.serverRepo}</td>
                <td>{skill?.liveLink}</td>
                <td>{skill?.startDate}</td>
                <td>{skill?.endDate}</td>

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

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProject;
