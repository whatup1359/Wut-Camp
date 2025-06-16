import { Button } from "../ui/button";
import { AlignCenter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="cursor-pointer">
          <AlignCenter />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <SignedOut>

          <DropdownMenuItem>
            <SignInButton mode="modal">
              <Button variant={"default"} className="text-left cursor-pointer w-full">Login</Button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton>
              <Button variant={"outline"} className="cursor-pointer w-full">Register</Button>
            </SignUpButton>
          </DropdownMenuItem>

        </SignedOut>

        {/* ล็อกอินแล้ว */}
        <SignedIn>
          {links.map((item, index) => (
            <DropdownMenuItem key={index} asChild className="cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        <DropdownMenuSeparator />  
        <SignOutLink />
        </SignedIn>


      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
