'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login submitted', { email, password })
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-12">
        <img
          src="/placeholder.svg?height=300&width=300"
          alt="Login illustration"
          className="w-full max-w-md mb-8 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-4 transition-opacity duration-300 ease-in-out opacity-0 animate-fade-in">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-center transition-opacity duration-300 ease-in-out opacity-0 animate-fade-in delay-200">
          Log in to access your account and manage your projects.
        </p>
      </div>
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div className="w-full max-w-md p-8 transition-all duration-300 ease-in-out transform hover:shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-105"
              >
                Log In
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

