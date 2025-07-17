import React from 'react'

function SendMessage() {
  return (
    <div className='bg-teal-50 p-6 rounded-lg shadow-md my-6'>
      <h1 className='text-4xl font-bold py-6 text-center'>Contact Info</h1>
      <section className='grid grid-cols-2 gap-4 mt-4'>
        <div className='flex flex-col gap-3 shadow-xs'>
          <label>First Name</label>
          <input type="text"
          className='rounded-md p-2 bg-white outline-0 focus:border-2 focus:border-teal-500 focus:ring-teal-500' 
          placeholder='Enter name' 
          />
        </div>
        <div className='flex flex-col gap-3 shadow-xs'>
          <label>First Name</label>
          <input type="text" 
          className='rounded-md p-2 bg-white outline-0 focus:border-2 focus:border-teal-500 focus:ring-teal-500'
          placeholder='Enter name' 
          />
        </div>
        <div className='flex flex-col col-span-2 shadow-xs gap-3'>
          <label>Email</label>
          <input type="email" 
          className='rounded-md p-2 bg-white outline-0 focus:border-2 focus:border-teal-500 focus:ring-teal-500'
          placeholder='Enter email' 
          />
        </div>
        <div className='flex flex-col col-span-2 shadow-xs gap-3'>
          <label>Email</label>
          <textarea type="email" 
          className='rounded-md p-2 bg-white outline-0 focus:border-2 focus:border-teal-500 focus:ring-teal-500'
          placeholder='Enter email' 
          rows="6"
          />
        </div>
        <button className='py-1.5 px-3 bg-[#309688e1] hover:bg-[#309689] text-white rounded-md'>Send Message</button>
      </section>
    </div>
  )
}

export default SendMessage