import axios from "axios";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const [editorState, setEditorState] = useState();
  const [title, setTitle] = useState("");
  const [date, setdate] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(editorState?.getCurrentContent().getPlainText()); // Log plain text to console
  };

  const handleSubmit = () => {
    const content = editorState?.getCurrentContent().getPlainText();
    console.log("Title:", title);
    console.log("date:", date);
    console.log("Content:", content);

    // Make POST request to backend
    axios
      .post("http://localhost:5000/api/v1/create-blog", {
        title,
        date,
        content,
      })

      .then((response) => {
        console.log("Blog submitted successfully:", response.data);
        toast.success("blog added");
      })

      .catch((error) => {
        console.error("Error submitting blog:", error);
      });
  };
  return (
    <div className=" rounded-md p-4 max-w-6xl mx-auto text-gray-500 text-[20px]">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 bg-[#434444] text-white  rounded-md"
      />
      <input
        type="date"
        placeholder="date"
        value={date}
        onChange={(e) => setdate(e.target.value)}
        className="w-full p-2 mb-4 bg-[#434444] text-white  rounded-md"
      />
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        editorStyle={{
          backgroundColor: "#434444",
          color: "#ffffff",
          paddingLeft: "10px",
        }}
      />
      <button
        className="mt-4 text-white bg-transparent btn w-44"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateBlog;
