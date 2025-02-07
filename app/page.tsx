'use client'

import Link from "next/link";

export default function Home() {

  return (<>
    <nav className="flex justify-between w-full p-5">
      <Link href="/">Home</Link>
      <Link href="/ficha">Ficha</Link>
    </nav>
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5 bg-gray-900 text-white">
    </div>
  </>
  );
}
