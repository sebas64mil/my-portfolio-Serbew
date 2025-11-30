import React from "react";
import GithubIcon from "../../assets/Icons/GithubIcon.jsx";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon.jsx";
import InstagramIcon from "../../assets/Icons/InstagramIcon.jsx";
import ItchioIcon from "../../assets/Icons/ItchioIcon.jsx";
import GmailIcon from "../../assets/Icons/Gmailcon.jsx";

import Button from "../Buttons/Button.jsx";

import { translations } from "../../Data/translations.js";
import { useLanguage } from "../../Data/LanguageContext.jsx";

const contacts = [
  { name: "Gmail", icon: <GmailIcon className="w-5 h-5 text-teal-300"/>, link: "mailto:vsebasjrincon12@gmail.com" },
  { name: "GitHub", icon: <GithubIcon className="w-5 h-5 text-teal-300"/>, link: "https://github.com/sebas64mil" },
  { name: "Itchio.io", icon: <ItchioIcon className="w-5 h-5 text-teal-300"/>, link: "https://serbew.itch.io" },
  { name: "LinkedIn", icon: <LinkedinIcon className="w-5 h-5 text-teal-300"/>, link: "https://www.linkedin.com/in/juan-sebastian-rincon-villamil-26a38a340/" },
  { name: "Instagram", icon: <InstagramIcon className="w-5 h-5 text-teal-300"/>, link: "https://www.instagram.com/serbew__/" }
];

export default function SectionContacts() {

  const { language } = useLanguage();
  const t = translations[language];

  return (
<section className="w-full flex justify-center py-8 px-4">
  <div className="w-full max-w-2xl rounded-lg outline-4 -outline-offset-4 outline-teal-300 flex flex-col items-center gap-5 px-4 sm:px-6 py-6">
    <header className="w-full text-center border-b-4 border-teal-300 pb-5">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Oxanium'] text-teal-300 leading-[60px]">
        {t.contact.title}
      </h2>
    </header>

    <ul className="flex flex-col gap-6 w-full items-center">
      {contacts.map((contact) => (
        <li key={contact.name} className="w-full flex justify-center">
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <Button size="lg" variant="dark" icon={contact.icon} iconPosition="right">
              {contact.name}
            </Button>
          </a>
        </li>
      ))}
    </ul>
  </div>
</section>

  );
}
