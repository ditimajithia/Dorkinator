import { Button } from "../../ui/button";
import Ellipse from "../../../assets/backdrop-dependencies/Ellipse.svg";
const Hero = () => {
  return (
    <section>
      <div className="container mx-auto md:px-40 px-10">
        <div className="text-center space-y-4 sm:space-y-5 lg:space-y-10 relative">
          <div>
            <div className="absolute sm:top-[100px] sm:left-[-100px] md:top-[200px] md:left-[-50px] sm:scale-50 md:scale-75 lg:scale-90 scale-0">
              <img src={Ellipse} alt="Ellipse" />
            </div>
            <div className="absolute sm:bottom-[100px] sm:right-[-140px] md:bottom-[80px] md:right-[-60px] sm:scale-50  md:scale-75 lg:scale-90 scale-0">
              <img src={Ellipse} alt="Ellipse" />
            </div>
            <div className="absolute top-[-125px] left-[40%] sm:scale-50 scale-0">
              <img src={Ellipse} alt="Ellipse" />
            </div>
          </div>
          <div className="font-semibold 2xl:text-7xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl leading-tight text-xl">
            <div className="hidden md:block ">
              <h1>
                Automate your <br />
                Google Dorking
              </h1>
            </div>
            <div className="md:hidden block w-full">
              <h1>Automate your Google Dorking</h1>
            </div>
          </div>
          <div className="text-[#9E9E9E] 2xl:text-xl lg:text-lg md:text-base sm:text-base text-xs">
            <h3>
              Effortlessly discover information with our powerful <br />
              Google Dorking tool
            </h3>
          </div>
          <div>
            <a href="#dorks">
              <Button className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal lg:scale-100 scale-75">
                Get Started{" "}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
