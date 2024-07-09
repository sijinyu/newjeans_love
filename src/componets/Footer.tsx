import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-newjeans-blue text-white text-center p-4">
      <span>{new Date().getFullYear()} sijin yu. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
