import React from 'react';

const FormContainer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-customBlue text-white p-8 w-3/4">
        <h1 className="text-2xl mb-8">Let's connect</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-white bg-customBlue" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-white bg-customBlue" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input type="tel" id="phone" name="phone" className="w-full p-2 border border-white bg-customBlue" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" className="p-2 border border-white bg-customBlue resize-none h-32 w-full"></textarea>
          </div>
          <button type="submit" className="bg-customBlue border-white border-2 text-white px-4 py-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormContainer;
