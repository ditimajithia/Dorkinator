import { Button } from "../../ui/button";
import Ellipse from "../../../assets/backdrop-dependencies/Ellipse.svg";
const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-40">
        <div className="text-center space-y-10 relative">
          <div>
            <div className="absolute top-[200px] left-[-50px]">
              <img src={Ellipse} alt="Ellipse" />
            </div>
            <div className="absolute bottom-[80px] right-[-60px] scale-[-0.8]">
              <img src={Ellipse} alt="Ellipse" />
            </div>
            <div className="absolute top-[-125px] left-[40%] scale-[-0.4]">
              <img src={Ellipse} alt="Ellipse" />
            </div>
          </div>
          <div className="font-semibold 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-[50px] !leading-tight">
            <h1>
              Automate your <br />
              Google Dorking
            </h1>
          </div>
          <div className="text-[#9E9E9E] 2xl:text-xl lg:text-lg">
            <h3>
              Effortlessly discover information with our powerful <br />
              Google Dorking tool
            </h3>
          </div>
          <div>
            <Button className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal">
              Get Started{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
