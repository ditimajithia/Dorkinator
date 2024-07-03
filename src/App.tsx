import DorksList from "./components/home/Dorks/DorksList"
import WeCanHelp from "./components/home/Help/WeCanHelp"
import Hero from "./components/home/Hero/Hero"
import LeadsForm from "./components/home/Leads/LeadsForm"
import Navbar from "./components/home/Navbar/Navbar"
import Curve from './assets/backdrop-dependencies/curve.svg'

function App() {

  return (
    <>
      <div className='container mx-auto px-40 antialiased'>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
        {/* <div className="absolute left-0"> */}
        <div className="">
          <img src={Curve}/>
        {/* </div> */}
        </div>

        {/* Dorks List */}
        <DorksList />
        {/* We can Help */}
        <WeCanHelp />
        {/* Leads Form */}
        <LeadsForm />
      </div>
    </>
  )
}

export default App
