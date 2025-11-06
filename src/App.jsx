import Credibility from './components/Credibility.jsx';
import CtaBand from './components/CtaBand.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import SocialProof from './components/SocialProof.jsx';
import Timeline from './components/Timeline.jsx';
import ValuePillars from './components/ValuePillars.jsx';

const App = () => (
  <div className="page-wrapper">
    <Hero />
    <main>
      <Credibility />
      <ValuePillars />
      <Showcase />
      <Timeline />
      <SocialProof />
      <CtaBand />
    </main>
    <Footer />
  </div>
);

export default App;
