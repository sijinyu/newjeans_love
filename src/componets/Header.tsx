import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-white">
      <nav className="py-4 px-8 flex justify-between items-center bg-pink">
        <Link className="mx-2 text-white" href="/">
          홈
        </Link>
        <Link className="mx-2 text-white" href="/sns">
          SNS 모아보기
        </Link>
        <Link className="mx-2 text-white" href="/youtuber">
          유튜버 리스트
        </Link>
        <Link className="mx-2 text-white" href="/schedule">
          일정 리스트
        </Link>
      </nav>
    </header>
  );
};

export default Header;
