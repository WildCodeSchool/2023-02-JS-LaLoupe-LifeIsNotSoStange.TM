import "./Leaderboard.css";
import PropTypes from "prop-types";
import Avatar from "avataaars";

function secondsToMinutesAndSeconds(time) {
  const minutes = Math.floor(time / 60);
  const secondes = time % 60;
  return (
    <>
      {minutes > 1 ? ` ${minutes} min` : " 00 min"}
      {secondes > 1 ? ` ${secondes} sec` : " 00 sec"}
    </>
  );
}

function Leaderboard({ players }) {
  return (
    <div className="tableau">
      <table>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Avatar</th>
            <th>Classement</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={`player-${player.id}`}>
              <td>{player.pseudo}</td>
              <td>
                <Avatar {...player.avatar} className="w-[80px]" />
              </td>
              <td>{player.position}</td>
              <td>{secondsToMinutesAndSeconds(player.timer)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Leaderboard.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      timer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Leaderboard;
