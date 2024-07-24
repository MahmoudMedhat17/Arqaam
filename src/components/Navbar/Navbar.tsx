import { IoMenu } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollToSection from "../../Utils/ScrollToSection";

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="w-full fixed z-50 bg-white flex justify-between items-center px-8"
    >
      <img
        src="images/logo.png"
        className="cursor-pointer w-[200px]"
        onClick={() => ScrollToSection("nav")}
      />
      <div className="hidden md:flex gap-4 text-secondary-secondary">
        <a
          className="cursor-pointer"
          onClick={() => ScrollToSection("aboutus")}
        >
          About
        </a>
        <a
          className="cursor-pointer"
          onClick={() => ScrollToSection("services")}
        >
          Services
        </a>
        <a
          className="cursor-pointer"
          onClick={() => ScrollToSection("partners")}
        >
          partners
        </a>
        <a
          className="cursor-pointer"
          onClick={() => ScrollToSection("mission")}
        >
          Core Values
        </a>
        <a
          className="cursor-pointer"
          onClick={() => ScrollToSection("contactus")}
        >
          Contact
        </a>
      </div>
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoMenu size={20} className="text-secondary-secondary" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => ScrollToSection("aboutus")}>
              About
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => ScrollToSection("services")}>
              Services
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => ScrollToSection("partners")}>
              partners
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => ScrollToSection("mission")}>
              Core Values
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => ScrollToSection("contactus")}>
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
