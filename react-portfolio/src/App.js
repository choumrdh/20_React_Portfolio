import React from 'react';
import './App.css';
import Header from "./components/header/Header";

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
      </>
     );
  }
}
 
export default App;
