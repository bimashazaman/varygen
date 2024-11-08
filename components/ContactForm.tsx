'use client'

import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        'service_lqmxyeu',
        'template_4l86jrm',
        formData,
        'IJ05rJVpQfd3Dxv-0'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setFormData({ name: '', email: '', message: '' })
          alert('Message sent successfully')
          setIsLoading(false)
        },
        (err) => {
          console.log('FAILED...', err)
          alert(`Failed to send message: ${err.text || 'Please try again.'}`)
          setIsLoading(false)
        }
      )
  }

  return (
    <section className='dark:text-white text-gray-800 py-20' id='contact-us'>
      <div className='container mx-auto px-4 flex justify-center items-center flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2'>
          <form onSubmit={handleSubmit} className='p-8 h-full'>
            <h2 className='text-3xl font-bold mb-6'>
              Get a Free Project Consultation
            </h2>
            <p className='dark:text-gray-400 mb-6'>
              Curious about how we can help take your project to the next level?
            </p>
            <p className='dark:text-gray-400 mb-6'>
              Fill out the form, and we’ll get back to you within 48 hours.
            </p>
            <p className='dark:text-gray-400 mb-6'>
              No obligations, no pressure tactics. Just honest insights to
              support your vision.
            </p>
            <div className='mb-4'>
              <label className='block dark:text-gray-400 text-sm font-bold mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='shadow appearance-none border-2 dark:border-gray-200 border-gray-400 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent hover:bg-gray-800'
                required
                placeholder='Your Name'
              />
            </div>
            <div className='mb-4'>
              <label className='block dark:text-gray-400 text-sm font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='shadow appearance-none border-2 dark:border-gray-200 border-gray-400 rounded w-full py-2 px-3 bg-transparent hover:bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline'
                required
                placeholder='Your Email'
              />
            </div>
            <div className='mb-6'>
              <label className='block dark:text-gray-400 text-sm font-bold mb-2'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='shadow appearance-none border-2 dark:border-gray-200 border-gray-400 rounded w-full py-2 px-3 bg-transparent hover:bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline h-32'
                required
                placeholder='Your Message'
              ></textarea>
            </div>

            <button
              type='submit'
              className={`w-full border-2 dark:border-gray-200 border-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  hover:bg-gray-800 text-black dark:text-white
                ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
