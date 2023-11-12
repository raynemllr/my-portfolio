import { personalLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-col items-center justify-between gap-y-6 md:w-2/3 md:flex-row">
        <h3 className="text-center text-lg font-extrabold">
          © 2023 Rayne Mallari. All rights reserved.
        </h3>

        <div className="flex gap-x-5 md:gap-x-8">
          {personalLinks.map((item) => (
            <Link
              href={item.link}
              key={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.icon && (
                <item.icon className="duration-200 hover:text-orange-500 md:h-7 md:w-7" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
