import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref>
            <button className="your-custom-button-class">
              Home
            </button>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/quiz" passHref>
            <button className="your-custom-button-class">
              Quiz
            </button>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" passHref>
            <button className="your-custom-button-class">
              About
            </button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
