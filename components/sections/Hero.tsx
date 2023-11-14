import { Separator } from "@/components/ui/separator";
import { personalLinks, techStackIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-container py-36">
        <div className="flex flex-col items-center gap-x-20 lg:flex-row">
          <Image
            src="/assets/images/hero-img.jpg"
            alt="hero-img"
            width={1000}
            height={1000}
            quality={100}
            priority
            className="box"
          />

          <div className="mt-5 md:mt-0">
            <div className="flex items-end gap-x-5">
              <h1 className="text-4xl font-black md:text-6xl">Hi, I'm Rayne</h1>
              <Image
                className="h-10 w-10 md:h-16 md:w-16"
                src="/assets/images/hand-wave.png"
                alt="hand-wave"
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-500 duration-200 dark:text-slate-400">
              Front-End React Developer | Tarlac, Philippines 📍
            </h2>

            <p className="mt-8 text-justify text-lg font-semibold text-slate-700 duration-200 dark:text-slate-300">
              I'm on a mission to bridge creativity with technology. I
              specialize in bringing your digital ideas to life through
              responsive and engaging websites. Let's create a seamless online
              experience together!
            </p>

            <div className="mt-8 flex flex-col gap-x-3 md:flex-row md:items-end">
              <h2 className="text-base font-semibold">Tech Stack</h2>
              <Separator
                className="hidden h-7 w-[2px] bg-slate-700 duration-200 dark:bg-slate-500 md:block"
                orientation="vertical"
              />
              <div className="mt-2 grid grid-cols-9 gap-x-3">
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

            <div className="mt-10 flex gap-x-8">
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
        </div>
      </div>
    </section>
  );
}
export default Hero;
