import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FacebookIcon className="size-7 rounded-md" />, href: "https://www.facebook.com/si.tang.su.baw.thxng/", label: "Facebook" },
  { icon: <TwitterIcon className="size-7 rounded-md" />, href: "#", label: "Twitter" },
  { icon: <LinkedinIcon className="size-7 rounded-md" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = ({
  logo = {
    url: "wut-camp.vercel.app",
    src: "https://sayitwithapin.com/cdn/shop/files/Mockup-29.png?v=1743663398",
    alt: "",
    title: "wut-camp.vercel.com",
  },
  sections = defaultSections,
  description = "Please Follow Us",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 w-camp All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="pt-30">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start animate-pulse">
              <Link href={logo.url}>
                <Image src={logo.src} alt={logo.alt} className="h-30" />
              </Link>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1.5">
              <p className="text-muted-foreground text-sm flex items-center">
                {description}
              </p>

              <div className="text-muted-foreground flex items-center space-x-2">
                {socialLinks.map((social, idex) => (
                  <div key={idex} className="hover:text-primary font-medium hover:scale-110 transition duration-200">
                    <Link href={social.href} aria-label={social.label}>
                      {social.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdex) => (
              <div key={sectionIdex}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdex) => (
                    <li
                      key={linkIdex}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idex) => (
              <li key={idex} className="hover:text-primary">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
