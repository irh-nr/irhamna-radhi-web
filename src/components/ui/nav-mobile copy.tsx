import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./sheet";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/navItems";

export default function NavMobile() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Menu className="size-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="shadow-sm">
            <SheetTitle className="flex justify-between border-none leading-none !pb-0 mx-6">
              <SheetClose asChild>
                <Link href={"/#"}>
                  <span className="logo">IR</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button>
                  <X className="size-5" />
                </button>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>

          {/*Navmenu*/}
          <div className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <SheetClose asChild key={index}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-6"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
