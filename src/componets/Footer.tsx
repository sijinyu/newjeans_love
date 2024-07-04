import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-newjeans-blue text-white text-center p-4">
      <span>{new Date().getFullYear()} YourName. All rights reserved.</span> ©
      2024 NewJeans 팬사이트
    </footer>
  );
};

export default Footer;
