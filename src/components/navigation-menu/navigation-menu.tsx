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
        <div className="flex px-1">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  <p className="font-medium">Home</p>
                </button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/quiz" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  <p className="font-medium">Quiz</p>
                </button>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" passHref>
                <button className="p-2 py-1 rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
                  <p className="font-medium">About</p>
                </button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}