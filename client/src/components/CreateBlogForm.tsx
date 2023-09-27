interface ICreateForm {
  title: string;
  description: string;
  image: any;
}

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Data() {
  const { handleSubmit, register } = useForm<ICreateForm>();

  const submit = async (value: ICreateForm) => {
    let decode_token;
    try {
      const token = localStorage.getItem("token") || "";
      const jwt_token = jwtDecode(token) as { id: string };
      decode_token = jwt_token?.id;
    } catch {
      decode_token = "";
    }

    const userData = {
      ...value,
      image: null,
    };
    const image = value.image;
    const formData = new FormData();
    formData.append("author", decode_token);

    if (image[0]) {
      formData.append("image", image[0]);
    }
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value);
    });

    console.log(formData);

    const res = await axios.post(
      `${import.meta.env.BE_SERVER}/api/collections/blogs/records`,
      formData
    );
    if (res.status === 200) window.location.href = "/blogs";
  };

  return (
    <div className="pt-2">
      <motion.form
        onSubmit={handleSubmit(submit)}
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="grid place-items-center"
      >
        <div className="card bg-base-100 shadow-xl max-w-2xl w-full">
          <div className="card-body flex flex-col gap-3">
            <div>
              <label className="label" htmlFor="title">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                id="title"
                {...register("title")}
                placeholder="Title"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <label className="label" htmlFor="description">
                <span className="label-text">Description</span>
              </label>
              <textarea
                id="description"
                {...register("description")}
                placeholder="Content"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
            <div>
              <label className="label" htmlFor="image">
                <span className="label-text">Image</span>
              </label>
              <input
                id="image"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                {...register("image")}
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
}

export default Data;
