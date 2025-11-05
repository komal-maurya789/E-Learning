import React from "react";

const ContactHeader = () => {
  return (
    <>
    <div className="relative w-full h-60 flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 to-white text-center">
      <h1 className="text-3xl font-semibold text-gray-800">Contact</h1>
      <div className="mt-2 px-4 py-2 bg-orange-400 text-white rounded-full text-sm font-medium">
        Home &raquo; Contact
      </div>
      <span className="absolute top-10 left-10 text-orange-400 text-3xl">:)</span>
      <div className="absolute top-10 right-10 bg-purple-100 p-6 rounded-full">
        <span className="text-purple-500 text-xl">*</span>
      </div>
    </div>


{/* Form open */}
<div className="bg-gradient-to-r from-purple-200 to-indigo-300 p-10 rounded-xl shadow-xl mt-5">

      {/* Contact Form & Info Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Image & Info */}
        <div className="relative bg-white p-6 rounded-xl shadow-md">
          <img
            src="/images/banners-6.jpeg"
            alt="Contact"
            className="w-full h-40 rounded-lg"
          />
          {/* Contact Info */}
          <div className="mt-6 bg-indigo-800 text-[#ffffff] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <span className="text-pink-300 text-xl mr-3">📞</span>
              <p>For any Query: <br /> Free +68 (026)-9879</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-300 text-xl mr-3">📩</span>
              <p>Write to Us: <br /> support@example.com</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-red-300 text-xl mr-3">📍</span>
              <p>Visit anytime: <br /> 427 Hall Place Longview</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-300 text-xl mr-3">⏰</span>
              <p>Office Time: <br /> 10AM - 10PM</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
            Send us an email
          </button>
          <h3 className="text-2xl font-semibold mt-4">Feel Free to Write</h3>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Subject"
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder="Enter Phone"
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <textarea
              placeholder="Enter Message"
              className="p-3 border rounded-lg w-full h-32 focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

</>
  );
};

export default ContactHeader;
