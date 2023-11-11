"use client";

import Link from "next/link";
import { topbarData } from "@/constants";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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

      <ul className="hidden gap-x-8 md:flex">
        {topbarData.map((nav) => (
          <li className="topbar_items" key={nav.name}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-8 w-8 text-slate-700" />
        </SheetTrigger>

        <SheetContent side="left" className="min-w-full">
          <h1>Hello</h1>

          <SheetClose asChild>
            <X />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
export default Topbar;
