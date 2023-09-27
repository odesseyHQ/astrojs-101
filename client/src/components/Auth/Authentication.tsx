import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Auth() {
  const [auth, setAuth] = useState("signIn");

  return (
    <section className="grid place-items-center ">
      <div className="flex flex-col">
        {auth === "signIn" ? <SignInForm /> : null}
        {auth === "signUp" ? <SignUpForm /> : null}
        <button
          className="btn-ghost self-end mt-2"
          onClick={() => setAuth((e) => (e === "signIn" ? "signUp" : "signIn"))}
        >
          Switch to {auth === "signIn" ? "Sign up" : "Sign In"}
        </button>
      </div>
    </section>
  );
}
export default Auth;
