import "./App.css";
import BackgroundEffects from "./components/BackgroundEffects";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AboutSection from "./components/About";
import ProjectsSlider from "./components/ProjectSlider";
import WhyAttend from "./components/WhyAttend";
// import Agenda from "./components/Agenda";
import CallPage from "./components/callpage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10 h-full flex flex-col">
      
          <Header />
          
          <MainContent />
        </div>
      </div>

      {/* About Section */}
      <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <AboutSection />
         
        </div>
      </div>

      {/* Project Slider Section */}
      <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10 ">
          <ProjectsSlider />
        </div>
      </div>
      
  
      
      {/* Why Attend Section */}
      <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <WhyAttend />
        </div>
      </div>
      
      {/* Agenda Section */}
      {/* <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
        
        </div>
      </div> */}

      <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <CallPage />
        </div>
      </div>



      <div className="relative overflow-hidden">
        <BackgroundEffects />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}