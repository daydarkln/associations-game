/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Space, Button } from 'antd';
import './newgame.scss';
import InputValue from './InputValue';
import ItemMap from './ItemMap';
import Game from '../Game/Game';
import TableMenu from '../../components/table-menu/TableMenu';

function NewGame() {
  const [count, setCount] = useState(1);
  const [team, setTeam] = useState([]);
  const [member, setMember] = useState([]);
  const [twoTeamMember, setTwoTeamMember] = useState();

  const addTeam = x => {
    setTeam([...team, x]);
  };

  const addMember = y => {
    setMember([...member, y]);
  };

  const removeTeam = i => {
    setTeam(prev => prev.filter(item => item.id !== i));
  };

  const removeMember = i => {
    setMember(prev => prev.filter(item => item.id !== i));
  };

  const getTwoTeamMembers = members => {
    setTwoTeamMember(members);
    console.log(members);
  };

  return (
    <Space direction="vertical" className="container-body">
      {count === 1 && (
        <div>
          {team.length < 2 && (
            <InputValue
              addItem={addTeam}
              placeholderValue="Введите название команды"
              name="team"
            />
          )}
          <ItemMap
            removeElement={removeTeam}
            array={team}
            title="Название команды"
          />
        </div>
      )}
      {count === 2 && (
        <div>
          {team && (
            <InputValue
              addItem={addMember}
              placeholderValue="Введите имена игроков"
              name="member"
            />
          )}
          <ItemMap
            removeElement={removeMember}
            array={member}
            title="Список игроков"
          />
        </div>
      )}
      {count === 3 && (
        <Game playersName={member} getTwoTeamMembers={getTwoTeamMembers} />
      )}
      {count === 4 && <TableMenu twoTeamMember={twoTeamMember} />}

      <Button disabled={count < 2} onClick={() => setCount(count - 1)}>
        Prev
      </Button>
      <Button disabled={count > 3} onClick={() => setCount(count + 1)}>
        Next
      </Button>
    </Space>
  );
}

export default NewGame;
