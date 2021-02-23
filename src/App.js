import "./styles.css";
import Logo from "./fdm-logo.jpg"
import { Image } from "react-bootstrap";
import Leaderboard from "./Leaderboard";
import MatchHistory from "./MatchHistory";

const leaderboardData = [
  {rank: 1, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 2, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 3, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 4, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 5, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 6, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 7, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 8, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 9, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 10, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 11, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 12, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 13, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 14, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
  {rank: 15, alias: "The Undertaker", name: "Employee", wins: 5, losses: 2},
];

const matchHistoryData = [
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"},
  {playerOneName: "Employee 1", playerTwoName: "Employee 2", winner: 1, date: "23/02/2021"}
]

const App = () => {
  return (
      <div className="App">
        <div className="header">
          <Image src={Logo} className="fdm-logo"/>
          <div className="title">Ping Pong Leaderboard</div>
        </div>
        <div className="content">
          <Leaderboard data={leaderboardData}/>
          <div className="header">Recent Match History</div>
          <MatchHistory data={matchHistoryData}/>
        </div>
      </div>
  );
}

export default App