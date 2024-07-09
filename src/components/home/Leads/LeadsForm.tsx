import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import Ellipse from "../../../assets/backdrop-dependencies/Ellipse.svg";

const LeadsForm = () => {
  return (
    <div className="relative">
      <div className="absolute scale-[0.6] top-[-150px] right-[50%]">
        <img src={Ellipse} alt="Gola" />
      </div>
      <div className="flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 space-y-5 ">
          <h1 className="text-5xl font-semibold">Get in Touch</h1>
          <p className="text-[#9E9E9E] text-lg">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
          <div className="space-y-5">
            <Input
              type="email"
              placeholder="email@example.com"
              className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
            />
            <Input
              type="text"
              placeholder="name"
              className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
            />
            <Textarea
              placeholder="Type your message here."
              className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
            />
          </div>
          <Button className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadsForm;
