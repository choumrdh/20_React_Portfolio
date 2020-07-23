import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import ContactModal from "./components/contactModal/ContactModal";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/page/HomePage";
import ProjectPage from "./components/page/ProjectPage";

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //    }
  // }

  render() {
    return (
      
      <Router>
        <Header/>
        <Navbar/>

        <Switch>
         <Route exact path="/" component={HomePage} />
        <Route path="/project" component={ProjectPage} />
        {/* <Route path="/contact" component={ContactModal}/>  */}
        </Switch>

        <Footer/>
      </Router>

    );
  }
}

export default App;
