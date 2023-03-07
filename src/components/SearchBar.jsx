import React from 'react'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterOptions from "./FilterOptions";

const SearchBar = () => {
  
  return (
    <form className="flex items-center justify-center gap-3 p-5 md:px-3 md:gap-1.5">
      <div className="flex gap-2 items-center border border-dark-grey rounded-full py-[8px] px-3 relative w-[30%] md:w-[80%]">
        <FontAwesomeIcon icon={faSearch} className=" text-dark-grey text-sm" />
        <input
          type="text"
          placeholder="Search by keyword “civil engineer”"
          className=" placeholder:text-dark-grey placeholder:text-xs outline-none text-xs w-[80%]"
        />
      </div>
      <input
        type="submit"
        value="Find Job"
        className=" bg-orange text-white rounded-full px-[45px] py-[8px] text-xs md:px-[20px]"
      />
      <FontAwesomeIcon
        icon={faFilter}
      />
      <FilterOptions />
    </form>
  );
}

export default SearchBar