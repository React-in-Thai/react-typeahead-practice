import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const SearchNoResult = () => {
  return (
    <div className="my-16 text-center">
      <FontAwesomeIcon icon={faInbox} size="6x" className="text-gray-400" />
      <p className="my-8 text-gray-600">No result found!</p>
    </div>
  );
};

export default SearchNoResult;
