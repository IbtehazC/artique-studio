import React from "react";

export default function contact() {
  return (
    <div className="text-gray-100 px-8 py-12">
      <div className="text-center w-full"></div>
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto border-black border text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl lg:text-5xl font-bold leading-tight mb-8">
              Get in touch
            </h2>
            <p className="text-lg">
              Feel free to call, send an email or simply complete the enquiry
              form. We would love to hear from you.
            </p>
          </div>
          <div className="mt-2">
            <div className="flex items-center my-2 gap-2">
              <img src="./phone-logo.svg" alt="fb" className="h-9 w-9" />
              <p>+8801681040146</p>
            </div>
            <div className="flex items-center my-2 gap-2">
              <img src="./fb-logo.svg" alt="fb" className="h-9 w-9" />
              <a href="https://www.facebook.com/artiquestudiobd">facebook.com/artiquestudiobd</a>
            </div>
            <div className="flex items-center my-2 gap-2">
              <img src="./envelope-logo.svg" alt="fb" className="h-9 w-9" />
              <p>artiquestudiobd@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-green-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
