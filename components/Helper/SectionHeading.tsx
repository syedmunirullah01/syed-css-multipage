import { ReactNode } from "react";
import "./SectionHeading.css"; // Import the CSS file

type Props = {
  children: ReactNode;
  className?: string;
 
};

const SectionHeading = ({ children, className = "" }: Props) => {
  return <h1 className={`section-heading ${className}`}>{children}</h1>;
};

export default SectionHeading;
