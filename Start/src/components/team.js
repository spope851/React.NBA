import React from 'react';
import stats from '../scrape/playerStats.json'
import Player from './player'



class Team extends React.Component {
  render() {
    return (
      <div className="card col-12">
        <div className="card-header"></div>
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
//team info
              </tr>
            </tbody>
          </table>
          <br />
          <h2>Players</h2>
          <div className="row">
//player components
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
