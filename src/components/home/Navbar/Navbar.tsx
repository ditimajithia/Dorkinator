import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  return (
    <div className="container mx-auto px-40">
      <div className=" flex justify-between h-20 items-center">
        <p>Dorkinator</p>
        <Popover>
          <PopoverTrigger>
            <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-5 rounded-full">
              <User size={25} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <ul>
                <li>Login</li>
                <li>Logout</li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
