import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchHelpUI = () => {
  return (
    <div className="my-16">
      <FontAwesomeIcon icon={faSearch} size="6x" className="text-gray-400" />
      <p className="my-8 text-gray-600">Type at the top to search repositories.</p>
    </div>
  );
};

export default SearchHelpUI;
