import React from "react";
import "./currentgame.scss";

import { Table, Statistic, Input  } from "antd";

const { Column } = Table;
const { Countdown } = Statistic;

const data = [
   {
      firstName: "John",
   },
   {
      firstName: "Jim",
   },
   {
      firstName: "Joe",
   },
];

const data2 = [
   {
      lastName: "Koln",
   },
   {
      lastName: "Petr",
   },
   {
      lastName: "Qwer",
   },
];

const deadline = Date.now() + 1000 * 60 ;

function onFinish() {
  console.log('finished!');
}

function CurrentGame() {
   return (
      <div className="current">
        <Countdown className="current-time" title="Время" value={deadline} onFinish={onFinish} format="ss:SSS"/>
        <div className="current-game">
         <Table dataSource={data} pagination={false}>
            <Column
               className="current-game-column"
               title="First Comand"
               dataIndex="firstName"
               key="firstName"
            />
         </Table>

         <Table dataSource={data2} pagination={false}>
            <Column
               className="current-game-column"
               title="Second Comand"
               dataIndex="lastName"
               key="lastName"
            />
         </Table>
         </div>
         <Input className="current-input" placeholder="Введите слово" />
      </div>
   );
}

export default CurrentGame;
