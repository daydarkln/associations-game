import React from 'react';
import { Input, Button } from 'antd';

function InputValue({ addItem, placeholderValue }) {
  const [itemName, setItemName] = React.useState();

  const onChangeInput = e => {
    setItemName(e.target.value.trim());
  };

  const addItemName = (e, x) => {
    e.preventDefault();
    setItemName('');
    addItem(x);
  };

  return (
    <form onSubmit={e => addItemName(e, itemName)} className="input-width">
      <Input
        type="text"
        name="teamname"
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
