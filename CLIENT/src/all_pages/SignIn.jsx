import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })

  }

  const handleSubMit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signin', {
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

      navigate("/")

    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold">Sign In</h1>

      <form className="flex flex-col gap-4  " onSubmit={handleSubMit}>
        {/* <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg" onChange={handleChange}
        /> */}

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
          {loading ? "Loading" : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>
          Dont have an account ?
          <Link to="/sign-up">
            <span className="text-blue-500 capitalize"> Sign Up</span>
          </Link>
        </p>

        <p className="text-red-700 mt-5">{error && "something went wrong"}</p>
      </div>
    </div>
  )

};

export default SignIn;