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
      <h1 className="logo" onClick={pageUp}>
        rayne.dev
      </h1>

      <ul className="hidden gap-x-6 md:flex">
        {topbarData.map((nav) => (
          <li className="topbar_items" key={nav.name}>
            <Link href={nav.link}>{nav.name}</Link>
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
            {topbarData.map((nav) => (
              <li key={nav.name} className="text-2xl font-semibold">
                <SheetClose asChild>
                  <Link href={nav.link}>{nav.name}</Link>
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
