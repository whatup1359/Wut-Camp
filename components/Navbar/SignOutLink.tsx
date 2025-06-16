"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast("Logout Successfully!!!");
  };

  return (
    <SignOutButton>
      <button onClick={handleLogout} className="hover:bg-gray-100 hover:text-rose-500 rounded-md text-sm px-2 py-1.5 cursor-pointer w-full text-left">
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
