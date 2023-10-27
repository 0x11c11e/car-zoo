import React, { Component } from "react"

export default class SearchBar extends Component {
  render() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-xl">
          <div className="flex space-x-4">
            <select className="border border-gray-700 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option selected disabled>
                Year
              </option>
              {/* ...other options */}
            </select>
            <select className="border border-gray-700 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option selected disabled>
                Make
              </option>
              {/* ...other options */}
            </select>
            <select className="border border-gray-700 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option selected disabled>
                Model
              </option>
              {/* ...other options */}
            </select>
          </div>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition duration-200 ease-in-out">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    )
  }
}
