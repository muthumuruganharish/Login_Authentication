import React, { useState } from 'react'
import axios from "../../Axios/Axios.js"
import { Navigate, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState(0)
  const[dob,setDob]=useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("/users/signup", {
        name,
        email,
        password,
        phone,
        dob
      })

      alert("Account Created ✅")

      navigate("/")

    } catch (err) {
      console.log(err)
      alert("Signup Failed ❌")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setPassword(e.target.value)}
        />
         <input
          type="number"
          placeholder="Phone number"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setPhone(e.target.value)}
        />
         <input
          type="date"
         
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setDob(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 font-semibold hover:underline">
            Login
          </a>
        </p>


      </form>
    </div>
  )
}

export default SignUp
