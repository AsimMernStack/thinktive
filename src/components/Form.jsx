import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {

const{ register,handleSubmit} = useForm()



  return (
    <div className=' mt-[6vw] bg-white rounded-xl px-2 py-5 '>
        <h1 className='text-center text-3xl font-semibold animate-pulse text-blue-900 '>Get a Free Quote Today</h1>
        <form className='flex flex-col px-10  py-5' onClick={handleSubmit()}>
            <input className=' w-[500px] border px-5 py-3 border-slate-200  my-2 ' type="text" placeholder='Full Name'/>
            <input className=' w-[500px] border px-5 py-3 border-slate-200  my-2 ' type="text" placeholder='Enter phone number'/>
            <input className=' w-[500px] border px-5 py-3 border-slate-200  my-2 ' type="email" placeholder='E-mail'/>
            <input className=' w-[500px] border px-5 py-3 border-slate-200  my-2 ' type="text" placeholder='Name of your company?'/>
            <select  className='text-gray-500 w-[500px] border px-5 py-3 border-slate-200  my-2 ' >
                <option value="select">Select the service you are looking for:</option>
                <option value="select">Build a new website</option>
                <option value="select">Redesign an existing website</option>
                <option value="select">Graphic design and Branding</option>
                <option value="select">Mobile App Design and Development</option>
                <option value="select">Search Engine Optimization</option>
            </select>
            <p className='w-[32vw]'>*By submitting your phone number, you agree to receive text messages from Thinktive IT Solution. If you receive a text from us and wish to opt out, you can reply with "STOP" at any time.</p>
            <button className='transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-100  text-white py-3 mt-4 rounded-xl hover:animate-pulse'>submit</button>
        </form>
            
    </div>
  )
}

export default Form