import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b 
    from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center mx-auto h-full max-w-screen-lg'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline 
            border-b-4 border-gray-500 '>Contact</p>
                <p className='py-6'>Submit the form below to contact me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/62d5704e-3c1a-4fe5-a101-a18c4f820aac"
                method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email'
                    className='my-4 p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none'/>
                    <textarea placeholder="Enter your message"name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md 
                    text-white focus:outline-none '></textarea>
                    <button className='text-white px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold cursor-pointer
                    hover:scale-110 duration-300'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
