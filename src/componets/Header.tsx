import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-yellow-300">
              News
            </Link>
          </li>
          <li>
            <Link href="/videos" className="hover:text-yellow-300">
              Videos
            </Link>
          </li>
          <li>
            <Link href="/community" className="hover:text-yellow-300">
              Community
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-yellow-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/members" className="hover:text-yellow-300">
              Members
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
