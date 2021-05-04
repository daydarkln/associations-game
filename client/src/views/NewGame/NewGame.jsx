import React from "react";
import "./newgame.scss"
import { Input, Space ,Button , Select } from "antd";
const { Option } = Select;


function NewGame() {
   const [forms, setForms] = React.useState([]);

   const prevIsValid = () => {
      if (forms.length === 0) {
         return true;
      }
      const someEpmty = forms.some(
         (item) => item.Username === "" || item.Team === ""
      );

      return !someEpmty;
   };

   const handleClick = (e) => {
      e.preventDefault();
      const inputState = {
         Username: "",
         Team: "",
      };
      if (prevIsValid()) {
         setForms((prev) => [...prev, inputState]);
      }
   };

   const onChangeInput = (idx, e) => {
      e.preventDefault();

      setForms((prev) => {
         return prev.map((item, i) => {
            if (i !== idx) {
               return item;
            }
            return {
               ...item,
               [e.target.name]: e.target.value,
            };
         });
      });
   };

   const removeUser = (e, idx) => {
      e.preventDefault();
      setForms((prev) => prev.filter((item) => item !== prev[idx]));
   };

   return (
      <Space direction="vertical">
         {forms.map((el, i) => (
            <div
               type="primary"
               key={`${el}__${i}`}
            >{`Member ${el.Username} in Team ${el.Team} `}</div>
         ))}
         {forms.map((el, idx) => (
            <Space  key={`item__${idx}`}>
               <div className="input-width">
                  <Input
                     type="text"
                     name="Username"
                     placeholder="Enter new user"
                     value={el.Username}
                     onChange={(e) => onChangeInput(idx, e)}
                  />
               </div>
               <div className="input-width">
                  <Input
                     type="text"
                     name="Team"
                     placeholder="Choose team"
                     value={el.Team}
                     onChange={(e) => onChangeInput(idx, e)}
                  />
               </div>

               <Button onClick={(e) => removeUser(e, idx)}>x</Button>
            </Space>
         ))}

         <form>
            <Button disabled={!prevIsValid()}  onClick={(e) => handleClick(e)}>Add New User</Button>
         </form>
      </Space>
   );
}

export default NewGame;
