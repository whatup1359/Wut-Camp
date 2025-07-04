import { Suspense } from "react";
import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container flex flex-col justify-between px-6 py-4 sm:flex-row sm:items-center gap-4">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Suspense>
          <Search />
        </Suspense>
        {/* DarkMode & Profile */}
        <div className="flex gap-4 justify-between lg:justify-center">
          <DarkMode />
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
