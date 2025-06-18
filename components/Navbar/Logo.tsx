import { Tent } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex font-bold animate-pulse">
      <Tent className="mr-4" />
      <h1>W CAMP</h1>
    </Link>
  );
};
export default Logo;
