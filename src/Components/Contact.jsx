import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="py-22 px-[12%] text-center bg-white">
      <div className="max-w-xl mx-auto">
        <h4 className="text-center mb-2 text-lg font-Ovo">Skills</h4>
        <h2 className="text-center mb-4 text-5xl font-Ovo">Get in touch</h2>
        <p className="font-Ovo text-stone-500 mb-12 max-w-xl mx-auto leading-relaxed text-[17px] text-center">
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 font-Ovo text-lg mb-4">
              Thanks! I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-stone-500 underline font-Ovo"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                /* border-2 for thickness, focus:border-[#FF2056] for pink color */
                className="font-Ovo border-2 border-stone-200 rounded-xl px-4 py-4 text-[16px] outline-none focus:border-[#FF2056] placeholder:text-stone-400 transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="font-Ovo border-2 border-stone-200 rounded-lg px-4 py-3 text-[16px] outline-none focus:border-[#FF2056] placeholder:text-stone-400 transition-all duration-300"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={8}
              required
              className="font-Ovo w-full border-2 border-stone-200 rounded-lg px-4 py-3 text-[16px] outline-none focus:border-[#FF2056] placeholder:text-stone-400 resize-y mb-7 transition-all duration-300"
            />

            <button
              type="submit"
              /* active:scale-110 makes it increase size for a sec when clicked */
              className="bg-black text-white font-Ovo px-10 py-4 rounded-full text-base inline-flex items-center gap-3 hover:bg-[#FF2056] transition-all duration-200 active:scale-110 cursor-pointer"
            >
              Submit now <span className="text-lg">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
