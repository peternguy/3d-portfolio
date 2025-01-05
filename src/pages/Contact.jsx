import React, {useState} from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''})

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };
  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Peter",
        from_email: form.email,
        to_email: 'therealpnguyen@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: show success message
      //TODO: hide an alert
       
      setForm({name: '', email:'', message: ''})
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      //TODO: show error message
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <hi className="head-text">Get in Touch</hi>

        <form className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >

          <label className="text-black-500 font-semibold">
            Name
            <input
              type = "text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFucas={handleFocus} 
              onBlur={handleBlur}
            >
            </input>
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type = "email"
              name="email"
              className="input"
              placeholder="johndoe@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFucas={handleFocus} 
              onBlur={handleBlur}
            >
            </input>
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help!"
              required
              value={form.message}
              onChange={handleChange}
              onFucas={handleFocus} 
              onBlur={handleBlur}
            >
            </textarea>
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>


        </form>
      </div>
    </section>
  )
}

export default Contact