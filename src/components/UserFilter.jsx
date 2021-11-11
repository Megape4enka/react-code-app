import React, { useCallback } from "react";
import SearchInput from "./SearchInput";
import RadioSort from "./RadioSort";

const UserFilter = ({ filter, setFilter }) => {
  const handleChangeSearch = useCallback(
    ({ value }) => {
      setFilter({ ...filter, query: value });
    },
    [filter]
  );

  const handleChangeSort = useCallback(
    (selectedSort) => {
      setFilter({ ...filter, sort: selectedSort });
    },
    [filter]
  );

  return (
    <div className="search">
      <SearchInput
        value={filter.query}
        onChange={({ target }) => handleChangeSearch(target)}
      />
      <RadioSort
        value={filter.sort}
        onChange={(selectedSort) => handleChangeSort(selectedSort)}
        setFilter={setFilter}
      />
    </div>
  );
};

export default UserFilter;
