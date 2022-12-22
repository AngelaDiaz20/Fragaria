import './scss/styles.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M42.5,-64.5C48.9,-53.8,43.6,-33.1,49.4,-15.9C55.1,1.3,71.9,15,74.9,30.1C78,45.2,67.4,61.7,52.6,62.9C37.8,64.2,18.9,50.3,0.4,49.7C-18,49.1,-36.1,61.8,-48.5,59.8C-60.8,57.7,-67.5,40.9,-66.3,26C-65,11,-55.8,-2.1,-47.5,-11.6C-39.1,-21.2,-31.6,-27.2,-23.9,-37.4C-16.1,-47.7,-8,-62.2,5,-69.1C18,-76,36.1,-75.2,42.5,-64.5Z" transform="translate(100 100)" />
      </svg>
      <Footer />
    </div>
  );
}

export default App;
