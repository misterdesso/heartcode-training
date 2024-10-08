import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../theme-button/theme-button";

export default function NavBar() {
  return (
    <div className="sticky top-0 p-2">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <Link href="/" passHref>
              <button>
                Home
              </button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/quiz" passHref>
              <button>
                Quiz
              </button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about" passHref>
              <button>
                About
              </button>
            </Link>
          </NavigationMenuItem>

          <ModeToggle/>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
