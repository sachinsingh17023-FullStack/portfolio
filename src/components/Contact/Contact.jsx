import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅", {
            theme: "dark",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌", {
            theme: "dark",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-xl border border-gray-700 shadow-lg">
        <h3 className="text-xl font-semibold text-white text-center mb-4">
          Connect With Me 🚀
        </h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
