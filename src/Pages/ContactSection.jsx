import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../Components/Container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateid, formRef.current, publickey).then(
      () => {
        setStatus({
          type: "success",
          message: "Message sent successfully. I’ll get back to you soon!",
        });
        formRef.current.reset();
        setTimeout(() => setStatus(null), 3000);
      },
      () => {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
        setTimeout(() => setStatus(null), 3000);
      },
    );
  };

  return (
    <section id="contact" className="bg-neutral-950 py-16 text-white">
      {status && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium
      ${
        status.type === "success"
          ? "bg-green-500/10 text-green-400 border border-green-500/20"
          : "bg-red-500/10 text-red-400 border border-red-500/20"
      }
    `}
        >
          {status.message}
        </motion.div>
      )}

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            <span className="text-indigo-400"> Contact </span> Me
          </h2>
        </motion.div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        >
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Name</label>
            <input
              name="user_name"
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="you@gmail.com"
            />
          </div>

          <div className="grid gap-2 sm:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="Write your message here....."
            />
          </div>

          <div className="sm:col-span-2">
            <button className="w-full rounded-2xl bg-rose-400/80 hover:bg-rose-400 px-6 py-3 font-semibold text-neutral-900 transition-all duration-300 hover:scale-105">
              Send
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
