import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/navItems";

export default function NavMobile() {
  return (
    <div className="flex md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu className="size-5" />
          </MenubarTrigger>
          <MenubarContent className="mt-1 mr-4 w-44 bg-background rounded-xl shadow-lg border border-border flex flex-col space-y-1 p-2">
            {/*Navmenu*/}
            {navItems.map((item, index) => (
              <MenubarItem key={index} asChild>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </Link>
              </MenubarItem>
            ))}
            <MenubarItem asChild>
              <Link
                href={"/#contact"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
