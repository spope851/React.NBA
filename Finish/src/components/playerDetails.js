import React from 'react';

class PlayerDetails extends React.Component{
  render() {
    return (
      <>
          <p>{'id: '+this.props.data.id}</p>
          <p>{'Name: '+this.props.data.first_name+' '+this.props.data.last_name}</p>
          <p>{'Position: '+this.props.data.position}</p>
          <p>{this.props.data.height_feet ? 'Height: '+this.props.data.height_feet+'\''+this.props.data.height_inches+'"' : ''}</p>
          {window.location.pathname.indexOf('team') === -1? <><span>Team: </span><a href={"/teams/"+this.props.data.team.id}>{this.props.data.team.full_name}</a></> : <p></p>}
      </>
    );
  }
}

export default PlayerDetails;