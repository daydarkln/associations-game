/* eslint-disable react/no-array-index-key */
import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import './newgame.scss';

function ItemMap({ array, removeElement, title }) {
  const removeItemValue = (e, i) => {
    e.preventDefault();
    removeElement(i);
  };
  return (
    <>
      {array.length > 0 && <h3>{title}</h3>}
      {array.map((el, i) => (
        <div className="item">
          <div className="item-el" key={`${i}__${el}`}>
            {el}
          </div>

          <CloseCircleFilled
            className="item-btn"
            onClick={e => removeItemValue(e, i)}
          />
        </div>
      ))}
    </>
  );
}

export default ItemMap;
