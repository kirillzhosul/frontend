/**
 * Header component
 */

import clsx from "clsx";
import { ButtonLink } from ".";
import { ButtonLinkProps } from "./button";
import React, { ReactNode } from "react";
import { ROUTES } from "@/shared";
import { AR_One_Sans } from "next/font/google";

const logoFont = AR_One_Sans({ weight: "700", subsets: ["latin"] });

/**
 * Logotype component
 */
export function HeaderLogo() {
  return (
    <ButtonLink
      href="/"
      variant="linkAnimated"
      size="xl"
      className={clsx("text-bold text-3xl", logoFont.className)}
    >
      Kirill Zhosul
    </ButtonLink>
  );
}

/**
 * Default right content of the header
 * @param className High order styling
 */
function HeaderIsland({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ButtonLink href={ROUTES.contact} variant="primary">
        Contact me
      </ButtonLink>
    </div>
  );
}

/**
 * Button for the navbar
 */
function HeaderNavbarButton({ children, href, ...props }: ButtonLinkProps) {
  return (
    <li>
      <ButtonLink
        {...props}
        href={href}
        className="py-2 pr-4 pl-3 text-gray-700 lg:p-0 "
        variant="linkAnimated"
      >
        {children}
      </ButtonLink>
    </li>
  );
}

/**
 * Header navigation bar with center buttons
 */
function HeaderNavbar({ className }: { className?: string }) {
  return (
    <nav className={clsx("w-full lg:w-auto", className)}>
      <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
        <HeaderNavbarButton href={ROUTES.home}>Home</HeaderNavbarButton>
        <HeaderNavbarButton href={ROUTES.about}>About me</HeaderNavbarButton>
        <HeaderNavbarButton href={ROUTES.blog}>Blog</HeaderNavbarButton>
        <HeaderNavbarButton href={ROUTES.showcase}>Showcase</HeaderNavbarButton>
      </ul>
    </nav>
  );
}

/**
 * Header component
 */
export function Header({
  logo,
  navbar,
  island,
}: {
  logo?: ReactNode;
  navbar?: ReactNode;
  island?: ReactNode;
}) {
  return (
    <header className="bg-white">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {logo || <HeaderLogo />}
          {navbar || <HeaderNavbar className="order-1" />}
          {island || <HeaderIsland className="order-2" />}
        </div>
      </nav>
    </header>
  );
}
