import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addUser } from "../../store/user";

interface IFormSignIn {
  identity: string;
  password: string;
}

function SignUpForm() {
  const { register, handleSubmit } = useForm<IFormSignIn>();
  const submit = async (values: IFormSignIn) => {
    const res = await axios.post(
      `http://127.0.0.1:8090/api/collections/users/auth-with-password`,
      values
    );
    if (res.status === 200) {
      toast("success");
      addUser(res.data);
      window.location.href = "/";
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="card w-96 bg-base-100 shadow-xl"
    >
      <div className="card-body flex flex-col gap-5">
        <h2 className="card-title">Sign in</h2>
        <input
          type="text"
          placeholder="example@odd.com"
          className="input input-bordered w-full max-w-xs"
          {...register("identity", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          {...register("password", { required: true })}
        />
        <div className="card-actions justify-end">
          <button className="btn">Button</button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
