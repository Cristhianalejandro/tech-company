import {colors} from "./assets/data";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import ProcessSection from "./components/ProcessSection";

const App = () => {
  return <div className={`mim-h-screen ${colors.BG_COLOR} ${colors.TEXT_COLOR}`}>
    <Header/>

    <main className="">
      <div className="container max-w-[95%] md:max-w[90%]">
      <HeroSection/>

      </div>

      <MarqueeSection/>

      <ProcessSection/>

      <FooterSection/>
    </main>

  </div>;
};

export default App;
