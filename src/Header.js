import React from 'react'

const Header = () => {
  return (
    <> 
    <h1 className="font-bold text-blue-700 text-4xl text-center py-4">Covid 19 Web App</h1>
      <div className="bg-gray-900">
        <p className="text-white text-center px-10">
          This app uses the postman Covid 19 API which is updated daily.
        </p>
        <div className="text-white flex items-center justify-center">
          <a
            href="https://api.covid19api.com/summary"
            target="_blank"
            rel="noopenner noreferrer"
            className="bg-blue-600 mx-2 px-4 py-1 rounded mt-5 transition-colors hover:bg-green-800"
          >
            JSON API
          </a>
          <a
            href="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
            target="_blank"
            rel="noopenner noreferrer"
            className="bg-blue-600 mx-2 px-4 py-1 rounded mt-5 transition-colors hover:bg-green-800"
          >
            API Documentation
          </a>
        </div>
      </div>
    </>
  )
}

export default Header