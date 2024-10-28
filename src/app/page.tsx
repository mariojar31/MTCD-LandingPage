"use client";
import Image from "next/image";
import { Navbar } from "./components/header";
import Intro from "./components/intro";
import { useState, useEffect } from "react";
import Colors from "./colors";
import Footer from "./components/footer";
import InformationScreen from "./components/information";
import ContactMe from './components/contactme';

export default function Home() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleOpen = () => setIsModalOpen(true);  // Función para abrir el modal
  const handleClose = () => setIsModalOpen(false); // Función para cerrar el modal

  useEffect(() => {
    const setColorTheme = () => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        const colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(colorTheme ? 'dark' : 'light');
        localStorage.setItem('theme', colorTheme ? 'dark' : 'light');
      }
    };
    setColorTheme();
  }, []);

  const handleTheme = () => {
    const colorTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(colorTheme);
    localStorage.setItem('theme', colorTheme);
  };

  const selectLang = (lang: string) => {
    setLang(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    const setLanguaje = () => {
      const storedLang = localStorage.getItem('lang');

      if (storedLang) {
        setLang(storedLang);
      } else {
        if (typeof navigator !== 'undefined') {
          const language = navigator.language;
          if (language.startsWith('es')) {
            setLang('es');
            localStorage.setItem('lang', 'es');
          } else if (language.startsWith('en')) {
            setLang('en');
            localStorage.setItem('lang', 'en');
          } else if (language.startsWith('fr')) {
            setLang('fr');
            localStorage.setItem('lang', 'fr');
          }
        }
      }
    };

    setLanguaje();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: theme === 'dark' ? Colors.secondary : 'white', zIndex: -1 }}>
        <div style={{ backgroundColor: theme === 'dark' ? Colors.bgDark : 'beige', zIndex: 2 }}>
          <Navbar lang={lang} selectLang={selectLang} theme={theme} changeTheme={handleTheme} />
          <Image style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 0 }} width={1281} height={393} src="/glow.png" alt="Glow effect" priority />
          
          <Intro lang={lang} theme={theme} />
          <InformationScreen theme={theme} lang={lang} />
          
          {/* Aquí se pasa el estado y la función para cerrar el modal */}
          <ContactMe theme={theme} lang={lang} open={isModalOpen} onClose={handleClose} />

        </div>
        <Footer openModal={handleOpen} lang={lang} theme={theme} />
      </div>
    </>
  );
}
