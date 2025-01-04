import React, {useState} from 'react'

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''})

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};


  return (
    <section className="relative flex lg:flex-row flex-col max-container ">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <hi className="head-text">Get in Touch</hi>

        <form className="w-full flex flex-col gap-7 mt-14">
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

        </form>
      </div>
    </section>
  )
}

export default Contact