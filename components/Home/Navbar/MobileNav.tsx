import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";
import "./MobileNav.css"

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navClass = showNav ? "nav-open" : "nav-closed";
  return (
    <div>
      <div className={`fixed ${navClass} overlay`}>
        <div className={`nav-content ${navClass}`}>
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <p className="nav__link nav-link">{navlink.label}</p>
            </Link>
          ))}
          <CgClose onClick={closeNav} className="close-icon" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
