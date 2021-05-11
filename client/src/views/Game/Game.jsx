import React, { useState } from 'react';
import { Card } from 'antd';
import './game.scss';

function Game() {
  const [teams, setTeams] = useState([
    { id: 1, title: 'First team', players: [] },
    {
      id: 2,
      title: 'All players',
      players: [
        { id: 12, name: 'Elena' },
        { id: 23, name: 'Sasha' },
        { id: 34, name: 'Zeek' },
        { id: 45, name: 'Connie' },
        { id: 56, name: 'Annie' }
      ]
    },
    { id: 3, title: 'Second team', players: [] }
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [indexItem, setIndexItem] = useState(null);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'player') {
      e.target.style.boxShadow = '0 5px 6px gray';
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dragStartHandler(e, team, player) {
    setCurrentBoard(team);
    setCurrentPlayer(player);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none';
  }

  function dropHandler(e, team, player) {
    e.preventDefault();
    setIndexItem(team.players.indexOf(player));
  }

  function dropCardHandler(e, team) {
    e.preventDefault();
    if (team.id === currentBoard.id) {
      team.players.splice(indexItem + 1, 0, currentPlayer);
    } else {
      team.players.push(currentPlayer);
    }

    const currentIndexItem = currentBoard.players.indexOf(currentPlayer);
    currentBoard.players.splice(currentIndexItem, 1);
    setTeams(
      teams.map(el => {
        if (el.id === team.id) {
          return team;
        }
        if (el.id === currentBoard.id) {
          return currentBoard;
        }
        return el;
      })
    );
  }
  return (
    <div className="boards">
      {teams.map(team => (
        <Card
          key={team.id}
          className="single-board"
          title={team.title}
          bordered
          onDragOver={e => dragOverHandler(e)}
          onDrop={e => dropCardHandler(e, team)}
          onDragEnd={e => dragEndHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
        >
          {team.players.map(player => (
            <p
              key={player.id}
              className="player"
              draggable
              onDragStart={e => dragStartHandler(e, team, player)}
              onDrop={e => dropHandler(e, team, player)}
            >
              {player.name}
            </p>
          ))}
        </Card>
      ))}
    </div>
  );
}

export default Game;
