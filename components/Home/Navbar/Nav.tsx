import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import "./Nav.css"; // Import the CSS file

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`nav ${navBg ? "scrolled" : "transparent"}`}
      style={{ height: "80px" }}
    >
      <div className={`nav-content`}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={60} // Adjust height here for the logo
          className="logo"
          priority={true}
        />
        <div className="flex items-center">
          <div className={`nav-links ${navBg ? "visible" : ""}`}>
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav-link">{navlink.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <button className="hire-button">Hire Me</button>
            </Link>
            <HiBars3BottomRight
              onClick={openNav}
              className="hamburger-icon lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
