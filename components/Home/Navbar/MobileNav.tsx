// MobileNav.tsx
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import './MobileNav.css'; // Import the CSS file

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <div className={`mobile-nav-overlay ${showNav ? 'open' : ''}`}>
      <div className={`mobile-nav-content ${showNav ? 'open' : ''}`}>
        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav-link">
              {navlink.label}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className={`close-icon ${showNav ? 'sm' : ''}`}
        />
      </div>
    </div>
  );
};

export default MobileNav;
