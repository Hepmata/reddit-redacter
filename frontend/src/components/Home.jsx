import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Ready to Redact</span>
            <span className="block text-indigo-600 xl:inline"> your comments</span>
            <span className="block xl:inline">?</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Many reasons to redact your Reddit comments, to prevent stalkers, busybodies and being canceled. You deserve to be safe while farming karma!</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
                <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#FF4500] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                onClick={() => window.location.replace('https://reddit.com')}
                >Back to Reddit</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                onClick={() => navigate('/redactor')}
                >Start Redacting</button>
            </div>
          </div>
        </div>
      </main>
      </div>
      </div>
      )
}

export default Home