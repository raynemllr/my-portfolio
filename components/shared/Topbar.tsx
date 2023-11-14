"use client";

import Link from "next/link";
import { topbarData } from "@/constants";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

function Topbar() {
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="topbar">
      <Link href="#home">
        <h1 className="logo">rayne.dev</h1>
      </Link>

      <ul className="hidden gap-x-6 md:flex">
        {topbarData.map(({ name, link }) => (
          <li className="topbar_items" key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-8 w-8" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex min-w-full items-center justify-center"
        >
          <ul className="flex flex-col items-center gap-y-10">
            {topbarData.map(({ name, link }) => (
              <li key={name} className="text-2xl font-semibold">
                <SheetClose asChild>
                  <Link href={link}>{name}</Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
export default Topbar;
