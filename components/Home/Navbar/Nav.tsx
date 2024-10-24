import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import "./Nav.css"

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setnavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`nav ${navBg ? "bg" : ""}`}>
      <div className="container">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="margin-left"
          priority={true}
        />
        <div className="flex-container space-x-10">
          <div className="hidden lg-flex flex-container space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link">{navlink.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Link href="/contact">
              <button className="custom-button">Hire Me</button>
            </Link>
            <HiBars3BottomRight onClick={openNav} className="custom-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
