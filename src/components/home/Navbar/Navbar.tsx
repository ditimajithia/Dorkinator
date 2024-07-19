import { User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { pocketbase } from "../../../lib/utils";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useToast } from "../../ui/use-toast";

const Navbar = () => {
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const { toast } = useToast();
  const isLoggedIn = (): boolean => {
    if (pocketbase?.authStore?.isValid) return true;
    else return false;
  };

  const handleLogout = () => {
    pocketbase.authStore.clear();
    removeCookie("user");
    toast({
      title: "Logged Out",
      description: "User is logged out",
    });
  };

  return (
    <div className="container mx-auto px-40">
      <div className=" flex justify-between h-20 items-center">
        <p>Dorkinator</p>
        <Popover className="">
          <PopoverTrigger asChild>
            <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-5 rounded-full">
              <User size={25} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              {isLoggedIn() ? (
                <div className="space-y-2 w-2">
                  <p className="border-b-2 pb-1">
                    <Link to="/history">History</Link>
                  </p>
                  <p
                    onClick={() => handleLogout()}
                    className="cursor-pointer border-b-2 pb-1"
                  >
                    Logout
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="border-b-2 pb-1">
                    <Link to="/login">login</Link>
                  </p>
                  <p className="border-b-2 pb-1">
                    <Link to="/signup">Signup</Link>
                  </p>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
