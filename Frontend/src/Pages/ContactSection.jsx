// import Container from "../Components/Container";
// export default function ContactSection() {
//   return (
//     <section id="contact" className="bg-neutral-950 py-16 text-white">
//       <Container>
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
//           <div className="grid gap-2">
//             <label htmlFor="name" className="text-sm text-white/70">Name</label>
//             <input id="name" required className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
//           </div>
//           <div className="grid gap-2">
//             <label htmlFor="email" className="text-sm text-white/70">Email</label>
//             <input id="email" type="email" required className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@domain.com" />
//           </div>
//           <div className="grid gap-2 sm:col-span-2">
//             <label htmlFor="message" className="text-sm text-white/70">Message</label>
//             <textarea id="message" rows={4} className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
//           </div>
//           <div className="sm:col-span-2">
//             <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-95">Send</button>
//           </div>
//         </form>
//       </Container>
//     </section>
//   );
// }
// import { useState } from "react";
// import axios from "axios";
// import Container from "../Components/Container";


// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//           `${import.meta.env.VITE_Backend_URL}/mail/sendemail`,
//         formData
//       );

//       alert(res.data.message);
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       alert("Failed to send message");
//     }
//   };

//   return (
//        <section id="contact" className="bg-neutral-950 py-16 text-white">
//       <Container>
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
//         <form  onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
//           <div className="grid gap-2">
//             <label htmlFor="name" className="text-sm text-white/70">Name</label>
//             <input id="name"      
//              value={formData.name}
//               onChange={handleChange}
//               required
//                className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
//           </div>
//           <div className="grid gap-2">
//             <label htmlFor="email" className="text-sm text-white/70">Email</label>
//             <input id="email"
//                   value={formData.email}
//               onChange={handleChange}
//               required
//                type="email"  className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@domain.com" />
//           </div>
//           <div className="grid gap-2 sm:col-span-2">
//             <label htmlFor="message" className="text-sm text-white/70">Message</label>
//             <textarea id="message" 
//                  rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
//           </div>
//           <div className="sm:col-span-2">
//             <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-95">Send</button>
//           </div>
//         </form>
//       </Container>
//     </section>
//   );
// }

// import { useState } from "react";
// import axios from "axios";
// import Container from "../Components/Container";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     hp: "", // honeypot field
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_Backend_URL}/mail/sendemail`,
//         formData
//       );
//       alert(res.data.message);
//       setFormData({ name: "", email: "", message: "", hp: "" });
//     } catch (error) {
//       alert(error.response?.data?.message || "Failed to send message");
//     }
//   };

//   return (
//     <section id="contact" className="bg-neutral-950 py-16 text-white">
//       <Container>
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
//         >
//           <div className="grid gap-2">
//             <label htmlFor="name" className="text-sm text-white/70">Name</label>
//             <input
//               id="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40"
//               placeholder="Your name"
//             />
//           </div>

//           <div className="grid gap-2">
//             <label htmlFor="email" className="text-sm text-white/70">Email</label>
//             <input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40"
//               placeholder="you@domain.com"
//             />
//           </div>

//           <div className="grid gap-2 sm:col-span-2">
//             <label htmlFor="message" className="text-sm text-white/70">Message</label>
//             <textarea
//               id="message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40"
//               placeholder="Tell me about your project"
//             />
//           </div>

//           {/* Honeypot hidden field */}
//           <input
//             type="text"
//             id="hp"
//             value={formData.hp}
//             onChange={handleChange}
//             style={{ display: "none" }}
//           />

//           <div className="sm:col-span-2">
//             <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900">
//               Send
//             </button>
//           </div>
//         </form>
//       </Container>
//     </section>
//   );
// }
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Container from "../Components/Container";

// export default function ContactSection() {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // 🛡️ Honeypot check (bot protection)
//     if (formRef.current.hp.value) {
//       return;
//     }

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         {
//           publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//         }
//       )
//       .then(
//         () => {
//           alert("Message sent successfully ✅");
//           formRef.current.reset();
//         },
//         (error) => {
//           console.error(error);
//           alert("Failed to send message ❌");
//         }
//       );
//   };

//   return (
//     <section id="contact" className="bg-neutral-950 py-16 text-white">
//       <Container>
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//           Contact
//         </h2>

//         <form
//           ref={formRef}
//           onSubmit={sendEmail}
//           className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
//         >
//           <div className="grid gap-2">
//             <label className="text-sm text-white/70">Name</label>
//             <input
//               type="text"
//               name="user_name"
//               required
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3"
//               placeholder="Your name"
//             />
//           </div>

//           <div className="grid gap-2">
//             <label className="text-sm text-white/70">Email</label>
//             <input
//               type="email"
//               name="user_email"
//               required
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3"
//               placeholder="you@domain.com"
//             />
//           </div>

//           <div className="grid gap-2 sm:col-span-2">
//             <label className="text-sm text-white/70">Message</label>
//             <textarea
//               name="message"
//               rows="4"
//               required
//               className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3"
//               placeholder="Tell me about your project"
//             />
//           </div>

//           {/* 🐝 Honeypot (hidden field for bots) */}
//           <input
//             type="text"
//             name="hp"
//             style={{ display: "none" }}
//             tabIndex="-1"
//             autoComplete="off"
//           />

//           <div className="sm:col-span-2">
//             <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900">
//               Send
//             </button>
//           </div>
//         </form>
//       </Container>
//     </section>
//   );
// }


