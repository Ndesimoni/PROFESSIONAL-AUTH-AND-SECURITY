import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })

  }

  const handleSubMit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json()

      setLoading(false)

      if (data.success === false) {
        setError(true)
        return
      }

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>

      <form className="flex flex-col gap-4  " onSubmit={handleSubMit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 hover:opacity-95 disabled:opacity-80  rounded-lg uppercase">
          {loading ? "Loading" : "Sign up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>
          Have an account ?
          <Link to="/sign-in">
            <span className="text-blue-500 capitalize"> Sign in</span>
          </Link>
        </p>

        <p className="text-red-700 mt-5">{error && "something went wrong"}</p>
      </div>
    </div>
  )

};

export default SignUp;
