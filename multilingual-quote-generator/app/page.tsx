'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      router.push('/quotes');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fef6e4] p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome 👋</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="border border-gray-300 px-4 py-2 rounded mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Enter
      </button>
    </main>
  );
}
