// import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer'
import Contacts from './component/Contacts'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
