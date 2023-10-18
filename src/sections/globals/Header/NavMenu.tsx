import { useState } from "react";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex w-full grow-0 items-center justify-end py-5 pr-edge">
      <div className="flex h-full items-center justify-end">
        <ul
          className={
            "absolute top-[68px] z-50 flex w-full flex-col items-start gap-6 bg-white px-4 py-5 text-xl text-text-dark transition-all  duration-300 lg:text-text-light xl:static xl:w-auto xl:flex-row xl:items-center xl:bg-transparent xl:px-0 xl:py-0 " +
            (isOpen ? "left-0 shadow shadow-neutral-200" : "-left-full")
          }
        >
          {links.map((link, idx) => {
            if (link.sublinks) {
              return (
                <li key={idx} className="group relative">
                  <a href={link.link}>{link.linkText}</a>
                  <ul className="z-50 w-full pl-5 pt-1 text-center lg:absolute lg:left-1/2 lg:hidden lg:w-[200px] lg:-translate-x-1/2 lg:pl-0  lg:shadow lg:group-hover:block">
                    {link.sublinks.map((sublink, idx) => (
                      <li
                        key={idx}
                        className="text-left text-text-dark transition-all duration-200 lg:bg-white lg:text-center lg:hover:bg-dark lg:hover:text-white"
                      >
                        <a className="block px-4 py-2" href={sublink.link}>
                          {sublink.linkText}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={idx}>
                  <a href={link.link}>{link.linkText}</a>
                </li>
              );
            }
          })}
          <li>
            <a
              href=""
              className="!block w-full -skew-x-3 border-2 border-primary bg-primary px-10 py-4 text-center font-semibold uppercase  text-secondary transition-all duration-300 hover:bg-transparent hover:text-primary  lg:w-auto  lg:text-left"
            >
              <span className="skew-x-3 tracking-wide">Request Estimate</span>
            </a>
          </li>
        </ul>
      </div>

      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
