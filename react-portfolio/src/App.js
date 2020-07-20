import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About";


class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = { 
  //     title:"Michelle Chou",
  //     headerLink:[
  //       {title: "About", path:"/"},
  //       {title: "Project", path:"/project"},
  //       {title: "contact", path:"/contact"}
  //     ],
  //    }
  // }
  
  render() { 
    return ( 
      <>
      <Header />
      <Navbar />
      <About />
      <Footer />
      </>
     );
  }
}
 
export default App;
