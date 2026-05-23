import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaTelegram,
  FaCommentDots,
} from "react-icons/fa";

export default function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "8976480621:AAEhL2I5ko1OTqATP-oytEXUPv3ybakCJYI"; // or process.env
  const CHAT_ID = "8570322567"; // or process.env

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async (message) => {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) {
      throw new Error("Telegram request failed");
    }

    return res.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `
<b>📩 New Contact Message</b>

👤 Name: ${form.name}
📧 Email: ${form.email}

💬 Message:
${form.message}
    `;

    try {
      await sendToTelegram(message);

      alert("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      alert(
        "❌ Couldn't send message. Please contact me on Telegram: @yourTelegramID"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-4  flex items-center justify-center bg-gray-800 w-[90%] mx-auto rounded-[9px] text-white px-4 py-12">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2  className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            If you have any questions, ideas or collaboration requests, feel free
            to send me a message. I usually reply as soon as possible.
          </p>

          <div className="flex items-center gap-3 text-cyan-400">
            <FaTelegram />
            <span>@dev_y0ung</span>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f1420] p-6 rounded-2xl shadow-lg space-y-4"
        >
          {/* Name */}
          <div className="flex items-center bg-[#111a2b] p-3 rounded-lg gap-3">
            <FaUser />
            <input
            id="contact"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent w-full outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-[#111a2b] p-3 rounded-lg gap-3">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent w-full outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start bg-[#111a2b] p-3 rounded-lg gap-3">
            <FaCommentDots className="mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="bg-transparent w-full outline-none h-32 resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg font-semibold"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}