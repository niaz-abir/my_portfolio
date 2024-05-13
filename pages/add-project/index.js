import React, { useState } from "react";
import axios from "axios"; // Import axios
import { FaAddressBook } from "react-icons/fa";

import toast from "react-hot-toast";

const AddProject = () => {
  const [name, setName] = useState("");
  const [tools, setTools] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [clientRepo, setClientRepo] = useState("");
  const [serverRepo, setServerRepo] = useState("");
  const [detailsOne, setDetailsOne] = useState("");
  const [file, setFile] = useState("");
  const [detailsTwo, setDetailsTwo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [features, setFeatures] = useState("");
  const [conclusion, setConclusion] = useState("");

  const handlePostCommunity = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=1f471dd54105935416929b8c41eb9f57",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const data = await response.json();

      const imageURL = data?.data?.url;
      setFile(imageURL);

      const formDataToSubmit = {
        name,
        tools,
        liveLink,
        clientRepo,
        serverRepo,
        detailsOne,
        image: imageURL,
        detailsTwo,
        startDate,
        endDate,
        features,
        conclusion,
      };

      const result = await axios.post(
        "https://portfolio-server-black-eight.vercel.app/api/v1/create-project",
        formDataToSubmit
      );
      toast.success("project added");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleImageChange = (e) => {
    setFile(e.target?.files[0]);
  };
  const handleNameChange = (e) => {
    setName(e.target?.value);
  };
  const handleToolChange = (e) => {
    setTools(e.target?.value);
  };
  const handleLiveLinkChange = (e) => {
    setLiveLink(e.target?.value);
  };
  const handleClientRepoChange = (e) => {
    setClientRepo(e.target?.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target?.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target?.value);
  };
  const handleFeaturesChange = (e) => {
    setFeatures(e.target?.value);
  };
  const handleServerRepoChange = (e) => {
    setServerRepo(e.target?.value);
  };
  const handleDetailsOneChange = (e) => {
    setDetailsOne(e.target?.value);
  };
  const handleDetailsTwoChange = (e) => {
    setDetailsTwo(e.target?.value);
  };
  const handleConclusionChange = (e) => {
    setConclusion(e.target?.value);
  };

  return (
    <section className="flex justify-center mt-24 mb-8 ">
      <div className="flex flex-col ">
        <h1 className="text-center flex items-center font-semibold gap-4 pb-6 text-3xl text-[#DB2955]">
          <FaAddressBook />
          Add Your Project
        </h1>
        <form onSubmit={handlePostCommunity}>
          <div className="flex justify-center gap-6">
            <div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleNameChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="tools"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleToolChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="live-Link"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleLiveLinkChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="client-repo"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleClientRepoChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="server-repo"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleServerRepoChange}
                />
              </div>

              <div className="pb-4">
                <textarea
                  type="text"
                  placeholder="details"
                  className="input input-bordered w-full max-w-xs h-24 text-[18px] bg-gray-700 text-white"
                  onChange={handleDetailsOneChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="file"
                  placeholder="picture"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="start Date"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleStartDateChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="file"
                  placeholder="picture"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="end Date"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleEndDateChange}
                />
              </div>
              <div className="pb-4">
                <textarea
                  type="text"
                  placeholder="features"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleFeaturesChange}
                />
              </div>
              <div className="pb-4">
                <input
                  type="file"
                  placeholder="picture"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="conclusion"
                  className="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
                  onChange={handleConclusionChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-2 h-[60px] py-4 w-[400px] font-bold text-white bg-purple-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
