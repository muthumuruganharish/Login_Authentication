import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Profile from '../components/Profile'

const Home = () => {

const navigate=useNavigate()
  const logout = () => {

    localStorage.removeItem("token")
    navigate("/login")

  }


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp 🚀</h1>

        <div className="space-x-4">
          <button onClick={()=>navigate("/profile")} className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-200 ">
            Profile
          </button>

          <button className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-4">

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Home Page 🎉
        </h2>

        <p className="text-gray-600 max-w-xl">
          This is your dashboard after login. You can add projects,
          manage users, or build anything using MERN stack.
        </p>

        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
          Get Started
        </button>

      </div>


      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-6 px-10 mt-20">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-600">
            Manage and track your full-stack projects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Tasks</h3>
          <p className="text-gray-600">
            Organize daily work and productivity.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Profile</h3>
          <p className="text-gray-600">
            Update your account details and settings.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Home
