import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import NewReleases from './Components/NewReleases/NewReleases';
import CategorySection from './Components/CategorySection/CategorySection';
import Featured from './Components/Featured/Featured';
import Trending from './Components/Trending/Trending';
import Sports from './Components/Sports/Sports';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewReleases />
      <CategorySection />
      <Featured />
      <Sports />
      <Trending />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
