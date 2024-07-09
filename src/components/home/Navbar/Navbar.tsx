import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20 items-center">
      <p>Dorkinator</p>
      <Link to={"/login"}>
        <p>User Icon</p>
      </Link>
    </div>
  );
};

export default Navbar;
