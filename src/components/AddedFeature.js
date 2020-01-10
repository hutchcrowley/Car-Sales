import React from "react";
import PropTypes from "prop-types";

const AddedFeature = ({ name, id, removeFeature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          removeFeature({ id });
        }}
      >
        X
      </button>
      {name}
    </li>
  );
  AddedFeature.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    removeFeature: PropTypes.func.isRequired
  };
};

export default AddedFeature;
