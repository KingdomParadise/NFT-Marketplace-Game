import { useState } from "react";

export default function ItemCheck(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return(
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} /> {props.name}
      </label>
    </div>
  );
}