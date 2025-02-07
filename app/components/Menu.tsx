import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav className="flex justify-center w-full p-5 gap-5">
      <Link href="/">Início</Link>
      <Link href="/ficha">Ficha</Link>
    </nav>
  );
};

export default Menu;