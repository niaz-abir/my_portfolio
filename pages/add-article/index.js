import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgbbAPIKey = "1f471dd54105935416929b8c41eb9f57";
      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
        formData
      );

      const imageUrl = imgbbResponse?.data?.data.url;

      const articleData = {
        title: data.title,
        details: data.details,
        date: data.date,
        image: imageUrl,
      };
      console.log(articleData);

      const result = await axios?.post(
        "https://portfolio-server-black-eight.vercel.app/api/v1/create-article",
        articleData
      );
      if (result) {
        toast.success("crete-successfully");
      }

      reset();
    } catch (error) {
      console.error("Error submitting article:", error);
    }
  };

  return (
    // <section classNameName="mt-8 ml-8 ">
    //   <div classNameName=" w-[600px] shadow-xl shadow-green-400 p-4">
    //     <h1 classNameName="mb-6 text-2xl font-bold text-center text-white ">
    //       Add Your Blog
    //     </h1>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <div classNameName="pb-4">
    //         <label htmlFor="title ">Title</label>
    //         <input
    //           id="title"
    //           type="text"
    //           {...register("title", { required: "Title is required" })}
    //           classNameName="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
    //         />
    //         {errors.title && <p>{errors.title.message}</p>}
    //       </div>
    //       <div classNameName="pb-4">
    //         <label htmlFor="title">Date</label>
    //         <input
    //           id="title"
    //           type="text"
    //           {...register("date", { required: "date required" })}
    //           classNameName="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
    //         />
    //         {errors.date && <p>{errors.title.message}</p>}
    //       </div>

    //       <div classNameName="pb-4">
    //         <label htmlFor="details">Details</label>
    //         <textarea
    //           id="details"
    //           {...register("details", { required: "Details are required" })}
    //           classNameName="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
    //         />
    //         {errors.details && <p>{errors.details.message}</p>}
    //       </div>

    //       <div>
    //         <label htmlFor="image">Image</label>
    //         <input
    //           id="image"
    //           type="file"
    //           accept="image/*"
    //           {...register("image", { required: "Image is required" })}
    //           classNameName="input input-bordered w-full max-w-xs text-[18px] bg-gray-700 text-white"
    //         />
    //         {errors.image && <p>{errors.image.message}</p>}
    //       </div>

    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </section>
    <section>
      <div className="relative m-10 rounded-lg shadow 4">
        <div className="flex items-start justify-between p-5">
          <h3 className="text-xl font-semibold text-white">Add Your Blog</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className="shadow-sm  bg-gray-800 text-white focus:border-none  rounded-lg  w-full p-2.5"
                  placeholder="title"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Date
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("date", { required: "date required" })}
                  className="shadow-sm bg-gray-800 text-white   sm:text-sm rounded-lg  block w-full p-2.5"
                  placeholder="date"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  Image
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                  className="shadow-sm bg-gray-800 text-white rounded-md w-full p-2.5"
                />
              </div>

              <div className="col-span-full">
                <label
                  for="product-details"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  {...register("details", { required: "Details are required" })}
                  rows="6"
                  className="block w-full p-4 text-white bg-gray-800 rounded-lg 0 sn-600 "
                  placeholder="Details"
                ></textarea>
              </div>
            </div>
            <button
              className="text-white mt-4 bg-purple-500   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Save all
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArticle;
