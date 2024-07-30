import DorksList from "./components/home/Dorks/DorksList";
// import WeCanHelp from "./components/home/Help/WeCanHelp";
import Hero from "./components/home/Hero/Hero";
import LeadsForm from "./components/home/Leads/LeadsForm";
import Navbar from "./components/home/Navbar/Navbar";
import CurvedBackground from "./components/home/CurvedBackground";

function App() {
  return (
    <>
      <div className="antialiased font-poppins scroll-smooth">
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* <div className="absolute left-0"> */}
        <CurvedBackground />
        {/* Dorks List */}
        <div className="">
          <DorksList />
        </div>
        {/* Leads Form */}
        <div className="md:mt-[300px] mt-24">
          <LeadsForm />
        </div>
        <div className="h-28" />
      </div>
    </>
  );
}

export default App;
