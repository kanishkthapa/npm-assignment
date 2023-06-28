import React from "react";
import { ReuseInput } from "@locoworks/reusejs-react-input";


const Textinput = ({ value, onChange, placeholder, onKeyDown }) => {
  return (
    <div>
      <ReuseInput
        className="w-full  border-2 border-slate-400 p-3"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Textinput;
