"use client";

import { useState } from "react";
import { Copy, Check, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer className="w-full bg-[#050505] pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <div className="flex flex-col items-center text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Let's build something <span className="text-accent italic font-medium">impactful.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/10 pt-12">

          <div className="flex flex-col md:flex-row gap-8">
            <button
              onClick={() => handleCopy("rhaka@example.com", "email")}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-lg font-light tracking-wide flex items-center gap-2">
                jend.arwen@gmail.com
                {copiedEmail ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
              </span>
            </button>

            <button
              onClick={() => handleCopy("+6281234567890", "phone")}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                <Phone size={18} />
              </div>
              <span className="text-lg font-light tracking-wide flex items-center gap-2">
                +62 859 10680 3226
                {copiedPhone ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
              </span>
            </button>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/rhaka-fertha"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-xs font-light tracking-wide">LinkedIn</span>
            </a>

            <a
              href="https://www.facebook.com/rakafertha"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              <span className="text-xs font-light tracking-wide">Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/rakafertha"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span className="text-xs font-light tracking-wide">Instagram</span>
            </a>
          </div>

        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-white/30 tracking-widest uppercase">
            © {new Date().getFullYear()} Rhaka Fertha Ary Sukma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
