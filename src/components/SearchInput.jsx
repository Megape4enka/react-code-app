import React from "react";

const SearchInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" placeholder="Введи имя, тег, почту..." {...props} />
      <svg
        className="img-search"
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 110-14 7 7 0 010 14z"
          fill="#C3C3C6"
        />
      </svg>
    </>
  );
});

export default SearchInput;
