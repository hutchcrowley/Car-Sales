import React from "react";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { removeFeature } from "../actions/index";

const AddedFeature = props => {
  const handleRemove = () => {
    dispatch(removeFeature(props.feature));
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove}>
        X
      </button>
      {name}
    </li>
  );
};
// AddedFeature.propTypes = {
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   removeFeature: PropTypes.func.isRequired
// };

export default AddedFeature;
