import React from 'react';
import stats from '../scrape/playerStats.json'
import Player from './player'

let teamID = window.location.pathname.replace('/teams/','')
let players = [];
for(let i = 0; i<stats.length; i++){
  if(stats[i].data[0].team.id.toString() === teamID){
    players.push(i)
  }
}

class Team extends React.Component {
  render() {
    return (
      <div className="card col-12">
        <div className="card-header">{stats[players[0]].data[0].team.name}</div>
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <td>{'City: '+stats[players[0]].data[0].team.city}</td>
                <td>{'Conference: '+stats[players[0]].data[0].team.conference}</td>
                <td>{'Division: '+stats[players[0]].data[0].team.division}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h2>Players</h2>
          <div className="row">
            {players.map((el, i) => 
              <Player details={stats[el].data[0]} name={stats[el].data[0].first_name+' '+stats[el].data[0].last_name} key={i}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;