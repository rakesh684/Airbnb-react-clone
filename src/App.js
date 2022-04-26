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
      <div  className='card-sections'>
      <Card 
        img={require('./images/airbnb3.png')}
        p='5.0 (6) .'
        h1='Life lessons with Katie Zaferes'
        h2='From $136 / person'
      />
      <Card 
        img={require('./images/airbnb4.jpg')}
        p='5.0 (6) .'
        h1='Learn wedding photography'
        h2='From $150 / person'
      />
      <Card 
        img={require('./images/airbnb5.jpg')}
        p='4.5 (10) .'
        h1='Group Mountain Biking'
        h2='From $90 / person'
      />
      </div>
      <div className='contacts'>
      <Contacts 
         img={require('./images/cat1.jpg')}
          name="Mr. Akash Rajput"
          phone="9999999999"
          email="rkrajput89@gmail.com"
       />
      <Contacts 
         img={require('./images/cat2.jpg')}
          name="Mr. Anup Chauhan"
          phone="9999999999"
          email="beastChauhan99@gmail.com"
      />
      <Contacts 
        img={require('./images/cat3.jpg')}
          name="Mr. Saurabh Mauryat"
          phone="9999999999"
          email="smaratMessy99@gmail.com"
      />
      <Contacts 
         img={require('./images/cat4.jpg')}
          name="Mr. Praveen Kumar"
          phone="9999999999"
          email="praveenChaya89@gmail.com"
      />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
