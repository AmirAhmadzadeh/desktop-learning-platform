import React, { Component } from "react";
import Header from "./Header";
import WithClass from './WIthClass';
import VideoAreaLecture from './VideoLecture';
import Aux from './hoc/aux' ; 

class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (  
      <div className='app'>
        <Header />
        <WithClass classes="container">
          <VideoAreaLecture  />
        </WithClass>
      </div>
    );
  }

}


export default App;
