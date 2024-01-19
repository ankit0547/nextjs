import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <Image
          className={classes.logo}
          width={100}
          height={100}
          src={logoImg}
          priority
          alt='A plate with food on it'
        />
        <h2> NextLevel Food</h2>
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
