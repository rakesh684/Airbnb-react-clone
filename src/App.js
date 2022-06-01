import React from 'react';
import './App.css';
import Card from './component/Card'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer'
import Contacts from './component/Contacts'
import data from './data';

function App() {
  const [formData,setFormData]=React.useState({
    email:"",
    password:"",
    confirmPassword:"",
    joinNewsLetter:false
  })
function handleChange(event){
  const {name,value,type,checked}=event.target
  setFormData(prevFormData=>({
    ...prevFormData,
    [name]: type==="checkbox" ? checked:value
  }))
}
function handleSubmit(event){
  event.preventDafault()
  if(formData.password === formData.passwordConfirm) {
    console.log("Successfully signed up")
} else {
    console.log("Passwords do not match")
    return
}

if(formData.joinedNewsletter) {
    console.log("Thanks for signing up for our newsletter!")
}
}
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
       <div className='form--container'>
       <h1>Welcome to Air-Bnb</h1>
         <form className='form' onSubmit={handleSubmit}>
           <input 
             name='email'
             type="email"
             value={formData.email}
             onChange={handleChange}
             placeholder="Email address"
             className='form--input'
           />
           <input 
             name='password'
             type="password"
             value={formData.password}
             onChange={handleChange}
             placeholder="Password"
             className='form--input'
           />
           <input 
             name='confirmPassword'
             type="password"
             value={formData.confirmPassword}
             onChange={handleChange}
             placeholder="Confirm Password"
             className='form--input'
           />
           <div className='form--marketting'>
             <input 
               name='joinNewsLetter'
               type="checkbox"
               id="checkEmail"
               checked={formData.joinNewsLetter}
               onChange={handleChange}
             />
             <label htmlFor='checkEmail'>I want to join NewsLetter</label>

           </div>
           <button className='form--submit'>
             Sign up
           </button>
         </form>
       </div>
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
