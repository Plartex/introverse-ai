
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between py-6 px-6 sm:px-10 w-full animate-fade-in",
        className
      )}
    >
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-md">
            <span className="text-white font-semibold text-xl">A</span>
          </div>
          <span className="font-semibold text-xl hidden sm:block">
            AI<span className="text-purple-600">Assistant</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-6">
          <Link
            to="/features"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            to="/help"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
          >
            Help
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 hidden sm:flex"
        >
          Sign In
        </Button>
        <Button
          className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-200 shadow-sm"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
