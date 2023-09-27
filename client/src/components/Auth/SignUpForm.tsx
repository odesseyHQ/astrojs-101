import { useForm } from "react-hook-form";
import axios from "axios";

interface IFormSignUp {
  username: string;
  password: string;
  avatar?: any;
}

function SignUpForm() {
  const { register, handleSubmit } = useForm<IFormSignUp>({});
  const submit = async (values: IFormSignUp) => {
    const userData = {
      ...values,
      passwordConfirm: values.password,
      avatar: null,
    };
    const avatar = values.avatar;
    const formData = new FormData();

    if (avatar[0]) {
      formData.append("avatar", avatar[0]);
    }
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== null) formData.append(key, value);
    });

    const res = await axios.post(
      `${import.meta.env.BE_SERVER}/api/collections/users/records`,
      formData
    );
    if (res.status === 200) window.location.href = "/";
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="card w-96 bg-base-100 shadow-xl "
    >
      <div className="card-body flex flex-col gap-5">
        <h2 className="card-title">Sign Up</h2>
        <input
          type="username"
          placeholder="username"
          {...register("username", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <div>
          <label className="label" htmlFor="avatar">
            <span className="label-text">avatar (optional)</span>
          </label>
          <input
            id="avatar"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("avatar")}
          />
        </div>
        <div className="card-actions justify-end">
          <button type="submit" className="btn">
            Button
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
