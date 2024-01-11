import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h3 className="text-white text-5xl mb-8 flex items-center justify-center">
        Contact
      </h3>
      <form className="bg-purple-950 shadow-md rounded px-10 pt-10 pb-10 mb-4">
        <div className="mb-4">
          <label className="block text-white text-[20px]  mb-2">
            First Name:
          </label>
          <input
            id="firstName" // Add an id attribute
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-[20px]  mb-2">
            Last Name:
          </label>
          <input
            id="lastName" // Add an id attribute
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-[20px]  mb-2">Email:</label>
          <input
            id="email" // Add an id attribute
            className="shadow appearance-none  border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            type="email"
          />
        </div>
        <button className="border rounded w-full font-bold py-2 bg-blue-900 text-white hover:bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
  StarsWrapper(Contact, "contact");
}
