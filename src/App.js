import React from 'react';
import './styles/main.scss';

// Local components
import Container from 'components/container';
import Footer from 'components/footer';
import Parallax from 'components/parallax';
import Navigation from 'components/navigation';
import Hero from 'components/hero';
import TechnicalSkills from 'components/technicalSkills';
import FeaturedProjects from 'components/projects';
import EverydayMunchies from 'components/EverydayMunchies';

const App = () => {
  return (
    <main className="portfolio">
      <Parallax />
      {/* <EverydayMunchies /> */}
      <Container>
        <Navigation />
        <Hero />
        <TechnicalSkills />
        <FeaturedProjects />
      </Container>
      <Footer />
    </main>
  );
}

export default App;