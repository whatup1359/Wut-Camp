"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, LoaderCircle } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className: string;
  size: btnSize;
  text: string;
};

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} capitalize w-full cursor-pointer`}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" className="cursor-pointer bg-rose-500/40">
        <Heart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  // console.log("is", isFavorite)
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      className={`cursor-pointer
    ${
      isFavorite
        ? "bg-rose-500 hover:bg-rose-500/40 transition duration-200"
        : "bg-rose-500/40 hover:bg-rose-500 transition duration-200"
    }`}
    >
      {pending ? (
        <LoaderCircle className="animate-spin" />
      ) : isFavorite ? (
        <Heart fill="white" />
      ) : (
        <Heart />
      )}
    </Button>
  );
};
