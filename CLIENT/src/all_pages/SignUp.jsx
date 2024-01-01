import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4  ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Email"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Password"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 hover:opacity-95 disabled:opacity-80  rounded-lg uppercase">
          Sign up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>
          Have an account ?
          <Link to="/sign-in">
            <span className="text-blue-500 capitalize"> Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
