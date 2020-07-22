import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About";
import Project from "./components/project/Project";
import ContactModal from "./components/contactModal/ContactModal"


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { 
      
  //    }
  // }
  
  render() { 
    return ( 
      <>
      <Header />
      <Navbar />
      <About />
      <Project/>
      <ContactModal />
      <Footer />
      </>
     );
  }
}
 
export default App;
