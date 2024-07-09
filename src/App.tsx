import DorksList from "./components/home/Dorks/DorksList";
import WeCanHelp from "./components/home/Help/WeCanHelp";
import Hero from "./components/home/Hero/Hero";
import LeadsForm from "./components/home/Leads/LeadsForm";
import Navbar from "./components/home/Navbar/Navbar";
import Curve from "./assets/backdrop-dependencies/curve.svg";

function App() {
  return (
    <>
      <div className="container mx-auto px-40 antialiased font-poppins">
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* <div className="absolute left-0"> */}
        <div className="absolute left-0">
          <img src={Curve} className="scale-[1.2]" />
          {/* </div> */}
        </div>

        {/* Dorks List */}
        <div className="mt-[500px]">
          <DorksList />
        </div>
        {/* We can Help */}
        {/* <WeCanHelp /> */}
        {/* Leads Form */}
        <div className="mt-[300px]">
          <LeadsForm />
        </div>
      </div>
    </>
  );
}

export default App;
