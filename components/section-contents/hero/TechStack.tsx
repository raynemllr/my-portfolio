import { Separator } from "@/components/ui/separator";
import { techStackIcons } from "@/constants";
import Image from "next/image";

function TechStack() {
  return (
    <div className="mt-8 flex flex-col items-center gap-x-3 lg:items-start 2xl:flex-row 2xl:items-end">
      <h2 className="text-base font-bold underline underline-offset-8 xl:no-underline">
        Tech Stack
      </h2>
      <Separator
        className="hidden h-7 w-[2px] bg-slate-700 duration-200 dark:bg-slate-500 xl:block"
        orientation="vertical"
      />
      <div className="mt-4 grid grid-cols-9 gap-x-3">
        {techStackIcons.map(({ name, icon }) => (
          <Image
            key={name}
            src={icon}
            alt={`${name}-icon`}
            width={100}
            height={100}
            className="h-8 w-8"
          />
        ))}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path
            fill="currentColor"
            d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"
          />
        </svg>
      </div>
    </div>
  );
}
export default TechStack;
