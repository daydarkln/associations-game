import React from 'react';
import { Input, Button } from 'antd';

function InputValue({ addItem, placeholderValue, name }) {
  const [itemName, setItemName] = React.useState();
  const [number, setNumber] = React.useState(1);

  const onChangeInput = e => {
    setItemName(e.target.value.trim());
  };

  const addItemName = (e, item) => {
    e.preventDefault();
    setItemName('');
    const inputState = {
      item,
      id: `${name}__${number}`
    };
    setNumber(prev => prev + 1);
    addItem(inputState);
  };

  return (
    <form onSubmit={e => addItemName(e, itemName)} className="input-width">
      <Input
        type="text"
        name={name}
        placeholder={placeholderValue}
        value={itemName}
        onChange={onChangeInput}
      />
      <Button
        className="button-sbm"
        type="primary"
        htmlType="submit"
        disabled={!itemName}
      >
        Submit
      </Button>
    </form>
  );
}

export default InputValue;
