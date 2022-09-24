import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CheckBoxProps } from "./types";

const Checkbox: React.FC<CheckBoxProps> = ({
  checked: pChecked = false,
  disabled = false,
  onChange = () => {},
  indeterminate = false,
  defaultChecked = false,
}) => {
  const [checked, setChecked] = useState<boolean>(pChecked);
  const isFirstTimeRef = useRef(false);
  useEffect(() => {
    setChecked(pChecked);
  }, [pChecked]);
  useEffect(() => {
    if (!isFirstTimeRef.current) {
      isFirstTimeRef.current = true;
      return;
    }
    onChange(checked);
  }, [checked]);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <input
      ref={(input) => {
        if (input) {
          input.indeterminate = indeterminate;
        }
      }}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={handleOnChange}
    />
  );
};
export default Checkbox;
