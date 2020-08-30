import React from 'react';
import PlayerDetails from './playerDetails'

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      details: false
    }
  }
  render() {
    const toggleDetails = () => {
      this.setState({details: !this.state.details})
    }
    return (
      <div  className="card col-1">
        <div className="card-header">
          <span onClick={(e)=>toggleDetails(e)}>{this.props.name}</span>
        </div>
        <div className="card-body">
          {this.state.details && <PlayerDetails data={this.props.details}/>}
        </div>
      </div>
    );
  }
}

export default Player;