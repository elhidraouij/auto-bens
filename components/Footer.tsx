import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 px-4 py-8">
      <div className="flex flex-row py-4">
        <div className="flex flex-col justify-start items-start gap-4 px-12 border-r">
          <Image
            src={"/images/auto-bens-logo.png"}
            alt="logo"
            width={60}
            height={10}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Auto Ben's 2022
            <br />
            All rights reserved &copy;
          </p>
        </div>
        {footerLinks.map((link) => {
          return (
            <div
              key={link.title}
              className="flex flex-col justify-start items-start px-12 border-r space-y-4"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.subtitles.map((subtitle) => {
                return (
                  <div key={subtitle.subtitle}>
                    <Link href={subtitle.link}>
                      <h4 className="text-gray-700">{subtitle.subtitle}</h4>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap mt-5 border-t border-gray-100 sm:px-16 py-8 text-gray-700">
        <p>@2022 Auto Ben's. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
