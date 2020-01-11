import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { removeFeature } from "../actions/index";

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFeature(props.feature));
  };

  return (
    <li>
      <button className="button" onClick={handleRemove}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};
AddedFeature.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeFeature: PropTypes.func.isRequired
};

export default AddedFeature;
