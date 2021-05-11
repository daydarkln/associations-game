/* eslint-disable react/no-array-index-key */
import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import { Card } from 'antd';
import './newgame.scss';

function ItemMap({ array, removeElement, title }) {
  const removeItemValue = (e, i) => {
    e.preventDefault();
    removeElement(i);
  };
  return (
    <>
      {array.length > 0 && <h3>{title}</h3>}
      {array.map(({ item, id }) => (
        <div className="item" key={id}>
          <div className="item-el">{item}</div>

          <CloseCircleFilled
            className="item-btn"
            onClick={e => removeItemValue(e, id)}
          />
        </div>
      ))}
    </>
  );
}

export default ItemMap;
