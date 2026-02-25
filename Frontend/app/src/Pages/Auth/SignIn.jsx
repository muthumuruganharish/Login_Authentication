import React, { useState } from 'react'
import axios from "../../Axios/Axios.js"
import { Navigate, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //used to navigate to home page
  const navigate = useNavigate()


  const login = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/users/login", {
        email,
        password
      })

      // Store token after successful login ;here "token" we can give any name
      localStorage.setItem("token", res.data.token);

      alert(res.data.message)

      navigate("/")

    } catch (err) {
      console.log(err)
      alert(err.response?.data?.message|| "login failed")//err.response?.data?.message(this helps to get data from backend and prints the error

    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={login}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign In
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 font-semibold hover:underline">
            Sign Up
          </a>
        </p>


      </form>
    </div>
  )
}

export default SignIn
