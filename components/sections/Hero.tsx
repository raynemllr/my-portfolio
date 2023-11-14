import Image from "next/image";
import TechStack from "../section-contents/hero/TechStack";
import PersonalLinks from "../shared/PersonalLinks";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="section-container py-16">
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

          <div className="mt-8">
            <div className="flex items-center justify-center gap-x-3 lg:justify-start lg:gap-x-1">
              <h1 className="text-4xl font-black xl:text-6xl">Hi, I'm Rayne</h1>
              <Image
                className="hidden h-9 w-9 sm:block lg:h-10 lg:w-10 xl:h-16 xl:w-16"
                src="/assets/images/hand-wave.png"
                alt="hand-wave"
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>

            <div className="mt-2 flex flex-col items-center text-lg font-bold tracking-tight text-slate-500 duration-200 dark:text-slate-400 sm:flex-row sm:justify-center md:text-xl lg:flex-col lg:items-start xl:flex-row xl:justify-start">
              <h2 className="">Front-End React Developer</h2>
              <span className="hidden sm:block lg:hidden xl:block"> | </span>
              <h2 className="">Tarlac, Philippines 📍</h2>
            </div>

            <p className="mt-8 text-center text-lg font-semibold text-slate-700 duration-200 dark:text-slate-300 lg:text-justify">
              I'm on a mission to bridge creativity with technology. I
              specialize in bringing your digital ideas to life through
              responsive and engaging websites. Let's create a seamless online
              experience together!
            </p>

            <TechStack />

            <div className="mt-10 flex justify-center gap-x-8 lg:justify-start">
              <PersonalLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
