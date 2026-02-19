"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Share2, X } from "lucide-react";

const socialLinks = [
  {
    label: "whatsapp",
    icon: FaWhatsapp,
    color: "#25d366",
    getHref: (whatsapp: string) =>
      `https://wa.me/${whatsapp.includes("+") ? whatsapp.replace("+", "") : whatsapp}?text=`,
    pulse: true,
  },
  {
    label: "telephone",
    icon: FaPhone,
    color: "#16a34a", // --main-color
    getHref: (_: string, telephone: string) => `tel:${telephone}`,
    iconClass: "rotate-[110deg]",
  },
  {
    label: "instagram",
    icon: FaInstagram,
    color: "#c13584",
    href: "https://www.instagram.com/qahwajeyn",
  },
  {
    label: "tiktok",
    icon: FaTiktok,
    color: "#010101",
    href: "https://www.tiktok.com/@user61719922769991",
  },
  {
    label: "facebook",
    icon: FaFacebookF,
    color: "#1877f2",
    href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
  },
  {
    label: "twitter",
    icon: FaTwitter,
    color: "#1da1f2",
    href: "https://x.com/NghmAbw11703",
  },
  {
    label: "youtube",
    icon: FaYoutube,
    color: "#ff0000",
    href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
  },
];

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;
  telephone: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed z-30 left-4 bottom-6 flex flex-col items-center gap-3">
      {/* Social icons — slide up when open */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col items-center gap-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {
                transition: { staggerChildren: 0.04, staggerDirection: -1 },
              },
            }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const href =
                social.getHref?.(whatsapp, telephone) ?? social.href ?? "#";

              return (
                <motion.a
                  key={social.label}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 20, scale: 0.7 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg group"
                  style={{ background: social.color }}>
                  {/* Pulse ring for whatsapp */}
                  {social.pulse && (
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-40"
                      style={{ background: social.color }}
                    />
                  )}
                  <Icon
                    className={`w-6 h-6 text-white relative z-10 ${social.iconClass ?? ""}`}
                  />
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        aria-label={open ? "إغلاق" : "التواصل الاجتماعي"}
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl focus:outline-none"
        style={{
          background: open
            ? "var(--slate-800, #1f2937)"
            : "var(--main-color, #16a34a)",
          transition: "background 0.3s",
        }}>
        {/* Outer ring */}
        <span
          className="absolute inset-0 rounded-full opacity-20 animate-ping"
          style={{
            background: open ? "#1f2937" : "var(--main-color, #16a34a)",
          }}
        />
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}>
          {open ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Share2 className="w-6 h-6 text-white" />
          )}
        </motion.span>
      </motion.button>
    </div>
  );
}
