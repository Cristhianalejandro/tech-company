import {colors} from "./assets/data";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return <div className={`mim-h-screen ${colors.BG_COLOR} ${colors.TEXT_COLOR}`}>
    <Header/>

    <main className="max-w-[95%] md:max-w[90%]">
      <HeroSection/>
    </main>

  </div>;
};

export default App;
