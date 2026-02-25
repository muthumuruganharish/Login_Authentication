import React from 'react'
import SignUp from './Pages/Auth/SignUp'
import SignIn from './Pages/Auth/SignIn'
import Home from './Pages/Home';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';

const App = () => {
  return (

    <Router>


      <Routes>

        <Route path='/' element={

          <PrivateRoute>
            <Home/>
          </PrivateRoute>

        } />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/profile" element={<Profile/>}/>


      </Routes>



    </Router>





  )
}

export default App
