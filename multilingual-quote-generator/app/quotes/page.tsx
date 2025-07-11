'use client';

import { useEffect, useState } from 'react';

const quotes = {
  en: [
    "Believe in yourself!",
    "Every day is a new opportunity.",
    "You are capable of amazing things.",
  ],
  tr: [
    "Kendine inan!",
    "Her gün yeni bir fırsattır.",
    "Harika şeyler yapabilecek kapasiten var.",
  ],
  uk: [
    "Вір у себе!",
    "Кожен день — це нова можливість.",
    "Ти здатен на дивовижні речі.",
  ],
};

export default function Quotes() {
  const [lang, setLang] = useState<'en' | 'tr' | 'uk'>('en');
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('username');
    setUsername(stored);
  }, []);

  const quote = quotes[lang][new Date().getDate() % quotes[lang].length];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef6e4] p-4 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'en' && `Hello, ${username || 'Guest'}!`}
        {lang === 'tr' && `Merhaba, ${username || 'Misafir'}!`}
        {lang === 'uk' && `Привіт, ${username || 'Гість'}!`}
      </h1>
      <p className="text-xl italic mb-6 max-w-md text-center">{quote}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-2 rounded ${
            lang === 'en' ? 'bg-blue-600 text-white' : 'bg-white border'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang('tr')}
          className={`px-4 py-2 rounded ${
            lang === 'tr' ? 'bg-blue-600 text-white' : 'bg-white border'
          }`}
        >
          Türkçe
        </button>
        <button
          onClick={() => setLang('uk')}
          className={`px-4 py-2 rounded ${
            lang === 'uk' ? 'bg-blue-600 text-white' : 'bg-white border'
          }`}
        >
          Українська
        </button>
      </div>
    </main>
  );
}
