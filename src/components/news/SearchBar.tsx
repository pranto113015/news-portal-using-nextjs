import React from "react";
interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div>
      <h3 className="">Search News</h3>
    </div>
  );
}

export default SearchBar;
