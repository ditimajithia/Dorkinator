import React from "react";
import { Input } from "../../ui/input";
import DorkListCard from "./DorkListCard";

const DorksList = () => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="w-3/6">
          <Input
            className="rounded-full py-6 text-black"
            placeholder="Target Domain"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-center">
        <DorkListCard />
      </div>
    </div>
  );
};

export default DorksList;
