import { Tent } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center font-bold animate-pulse">
      <Tent className="mr-4" size={30} />
      <h1 className="text-xl">W CAMP</h1>
    </Link>
  );
};
export default Logo;
