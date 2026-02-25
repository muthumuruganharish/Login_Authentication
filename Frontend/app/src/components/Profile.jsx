import React, { useEffect, useState } from 'react'
import Axios from "../Axios/Axios"

const Profile = () => {

  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")

        const res = await Axios.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log("PROFILE DATA:", res.data)

        setUser(res.data)

      } catch (err) {
        console.log("ERROR:", err.response?.data || err.message)
        setError(err.response?.data?.message || "Something went wrong. Please login again.")
      }
    }

    fetchData()

  }, [])

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={() => window.location.href = "/login"}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 text-lg animate-pulse">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          My Profile 👤
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 rounded-xl p-6 border">
              <p className="text-sm text-gray-500 mb-1">Full Name</p>
              <p className="text-xl font-semibold text-gray-800">
                {user.name}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <p className="text-sm text-gray-500 mb-1">Email Address</p>
              <p className="text-xl font-semibold text-gray-800 break-words">
                {user.email}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <p className="text-sm text-gray-500 mb-1">Phone Number</p>
              <p className="text-xl font-semibold text-gray-800 break-words">
                {user.phone}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border">
              <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
              <p className="text-xl font-semibold text-gray-800 break-words">
                {user.dob ? new Date(user.dob).toLocaleDateString() : "Not Provided"}
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Edit Profile
            </button>

            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
              Change Password
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Profile