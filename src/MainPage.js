import './App.css';
import React from 'react';
import Header from './Header';

class MainPage extends React.Component {
    
  render(){
      return (
        <div>
            <Header handleTableToShow={this.props.handleTableToShow}/>
            <div>
                <h1>{this.props.title}</h1>
            </div>
        </div>
      );
  }
}

export default MainPage;
