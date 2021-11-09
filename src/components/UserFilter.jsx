import React from 'react'
import SearchInput from "./SearchInput"
import RadioSort from "./RadioSort"

const UserFilter = ({filter, setFilter}) => {

    return (
        <div className="search">
            <SearchInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <RadioSort
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                setFilter={setFilter}
            />
        </div>
    )
}

export default UserFilter