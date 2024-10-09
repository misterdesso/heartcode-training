import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../theme-button/theme-button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow">
      <div className="flex p-2 justify-between w-full">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  Home
                </button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/quiz" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  Quiz
                </button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  About
                </button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center">
          <ModeToggle />
          <div className="flex px-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}