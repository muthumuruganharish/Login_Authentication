import React from 'react'
import { useEffect,useState } from 'react'
import Axios from "../Axios/Axios"

const Profile = () => {

  const [user,setUser]=useState(null)//for object we  use initial state as null 

  useEffect(()=>{

    const fetchData= async()=>{

      try{

        const token=localStorage.getItem("token")

        const res=await Axios.get("/users/profile",{
          headers:{
            Authorization: `Bearer ${token}` //Sending token inside headers
          }
          
        })
        setUser(res.data)


      }
      catch(err){

        console.log("ERROR:", err.response?.data || err.message)

      }

      

    }
    fetchData()


  },[])//[] is empty because it is going to run only once 
  if (!user) return <p>Loading...</p>;



  return (
    <div>
       <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
