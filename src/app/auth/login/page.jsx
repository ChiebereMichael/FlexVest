import React from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen font-mono flex flex-col">
      {/* header */}
      <div className="p-4 lg:p-8">
        <div className="container mx-auto">
          <Image
            src="/logo.svg"
            alt="FlemVex Logo"
            width={90}
            height={90}
            className="w-20 lg:w-28"
            priority
          />
        </div>
      </div>

      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* Left Column - Text Content */}
        <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center -mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-blue2 font-bold leading-tight mb-4">
            Every dollar saved <br className="hidden md:block" /> fights inflation!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-black">Sign in to continue</p>
        </div>

        {/* Right Column - Login Form */}
        <div className="p-6 md:p-12 lg:p-16 flex items-center justify-center mt-10">
          <div className="w-full max-w-md space-y-6 bg-white rounded-xl p-8">
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <input
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                <Link href="/auth/forgot-password" className="text-sm text-blue1 hover:text-blue2 text-semibold">
                  Forgot password?
                </Link>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
                <div>
                    <h3 className="font-semibold">New User? <Link href='/auth/signup'><span className="text-blue1">Create account</span></Link></h3>
                </div>
                  <div>
                      <button
                        type="submit"
                        className="w-full py-2 px-6 border border-transparent rounded-lg text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        Sign in
                      </button>
                  </div>
              </div>
            </form>
            <div>
                <h3 className="font-semibold text-sm">Trouble Signing in? <span className="text-blue1">Chat with us</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
