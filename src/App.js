// import logo from './logo.svg';
import './App.css';
import Card from './component/Card'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer'
import Contacts from './component/Contacts'
import data from './data';

function App() {
  const cards=data.map(item=>{
    return(
      <Card      
                key={item.id}
                item={item}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
            />
    )
  })
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <section className='card-list'>
      {cards}
      </section>
      
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
