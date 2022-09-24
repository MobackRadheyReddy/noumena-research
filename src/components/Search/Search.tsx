import { useState } from "react";
import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({
  disabled = false,
  onChange = () => {},
}) => {
  const [searchString, setSearchString] = useState("");
  return (
    <input
      disabled={disabled}
      value={searchString}
      onChange={(e) => {
        const { value } = e.target;
        setSearchString(value);
        onChange(value);
      }}
    />
  );
};
export default Search;
