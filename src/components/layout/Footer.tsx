import React from "react";
import { Youtube, Twitch, Github, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center flex-wrap md:flex-nowrap">
      {/* Redes sociais */}
      <div className="flex gap-4">
        <a
          href="https://www.youtube.com/@SevensLH"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          <Youtube className="w-6 h-6" />
        </a>
        <a
          href="https://www.twitch.tv/sevenslh"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          <Twitch className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/zSevens7"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/zSevens07"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-white hover:text-gray-900 transition"
        >
          <X className="w-6 h-6" />
        </a>
      </div>

      {/* Direitos reservados */}
        <div className="relative ml-auto mt-2 md:mt-0 text-white text-sm">
        &copy; Todos os direitos reservados a{" "}
        <a
            href="https://github.com/zSevens7"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-pink-500 transition-colors"
        >
            Gabriel Teperino Percegoni Figueira
        </a>
        </div>

    </footer>
  );
};

export default Footer;
