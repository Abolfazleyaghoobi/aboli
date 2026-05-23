import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socials = [
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://t.me/dev_y0ung",
    color: "#229ED9",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Abolfazleyaghoobi?tab=overview&from=2026-05-01&to=2026-05-23",
    color: "#828282",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://youtube.com/@abl-dev?si=IEfFypMnvS7NymgS",
    color: "#FF0000",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/abolfazle-yaghoobi-a99638348/",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/abolfazle_dev",
    color: "#E1306C",
  },
];

export default function SocialLinks() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-10 sm:py-14 md:py-20">
      <div className="w-full max-w-3xl text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800"
        >
          You can find me on social media
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-500 mt-3"
        >
          Connect with me on Telegram, YouTube, LinkedIn, and Instagram.
        </motion.p>

        {/* Icons Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>

              <span className="text-xs sm:text-sm text-gray-600">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}