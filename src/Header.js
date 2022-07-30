import React from 'react';


class Header extends React.Component {
  
    state ={
        tableNameToShow : "מעבר לטבלת עומק אגירה",
        isBamamTableOn : true
    }

    ChangeButtonName = () =>{
        this.setState(prevState => {
            return {
                isBamamTableOn : !prevState.isBamamTableOn,
                tableNameToShow: prevState.isBamamTableOn ? "מעבר לטבלת מידור" : "מעבר לטבלת עומק"
            }
        })
    }
    render(){
      return (
        <div>
          <button onClick={() => {
            this.ChangeButtonName();
            this.props.handleTableToShow(!this.state.isBamamTableOn)
          }}
          >{this.state.tableNameToShow}</button>  
        </div>
      );
  }
}

export default Header;