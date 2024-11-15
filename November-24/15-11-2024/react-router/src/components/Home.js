import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/about")
  }
  return (
    <div>Home
      <button onClick={handleNavigate}>
        Go to About
      </button>
    </div>
  )
}

export default Home