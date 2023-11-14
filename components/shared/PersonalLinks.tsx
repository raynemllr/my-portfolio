import { personalLinks } from "@/constants";
import Link from "next/link";

function PersonalLinks() {
  return (
    <>
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
    </>
  );
}
export default PersonalLinks;
