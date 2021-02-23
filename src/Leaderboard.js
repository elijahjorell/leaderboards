import React from 'react';
import { Table } from 'react-bootstrap';

const Leaderboard = (props) => {
  return (
      <div className="Leaderboard">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Alias</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((val) => {
                return (
                    <tr>
                      <td>{val.rank}</td>
                      <td>{val.alias}</td>
                      <td>{val.name}</td>
                      <td>{val.wins}</td>
                      <td>{val.losses}</td>
                    </tr>
                )
              })
            }
          </tbody>
        </Table>

      </div>
  )
}

export default Leaderboard;