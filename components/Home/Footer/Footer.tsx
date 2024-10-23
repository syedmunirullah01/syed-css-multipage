import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css"; // Import the custom CSS

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto" // Remove this class as we now have custom CSS
        />
      </div>
      <div className="footer-links ">
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/services">
          <div>Services</div>
        </Link>
        <Link href="/projects">
          <div>Project</div>
        </Link>
        <Link href="/reviews">
          <div>Reviews</div>
        </Link>
        <Link href="/contact">
          <div>Contact</div>
        </Link>
      </div>
      <p className="footer-note">
        © 2024 All Rights Reserved by Syed Munir Ullah
      </p>
    </div>
  );
};

export default Footer;
