import './App.css';
import React from 'react';
import MainPage from './MainPage';

class MainPageContainer extends React.Component {
    state ={
        isBamamTableOn : true
    }

    handleTableToShow = (tableNameToShow) =>{
        this.setState(prevState =>{
            return{
                isBamamTableOn: tableNameToShow
            }
        })

    }
  render(){
    console.log(this.state.isBamamTableOn)
      return (
        <div>
            {this.state.isBamamTableOn ? (
                <MainPage 
                handleTableToShow={this.handleTableToShow}
                title="Bamam"/>
            ) :
            (
                <MainPage
                handleTableToShow={this.handleTableToShow} 
                title="TTL"/>
            )}
        </div>
      );
  }
}

export default MainPageContainer;
