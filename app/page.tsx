'use client'

import Link from "next/link";

export default function Home() {

  const paleta = 'bg-gray-900 text-gray-200 dark:bg-gray-100 dark:text-gray-900';

  return (
    <>
      <nav className={`flex justify-center w-full p-5 gap-5 ${paleta}`}>
        <Link href="/">Home</Link>
        <Link href="/ficha">Ficha</Link>
      </nav>
      <div className="h-screen w-full flex flex-col items-center justify-center gap-5 bg-gray-900 text-white">
      </div>
    </>
  );
}
