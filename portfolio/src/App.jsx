import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <div id="work">
          <Hero />
        </div>
        
        <div id="services">
          <Features />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
