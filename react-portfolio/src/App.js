import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      title:"Michelle Chou",
      headerLink:[
        {title: "About", path:"/"},
        {title: "Project", path:"/project"},
        {title: "contact", path:"/contact"}
      ],
     }
  }
  
  render() { 
    return ( 
      <>
      </>
     );
  }
}
 
export default App;
