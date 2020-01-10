import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ features, onRemoveClick }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature
              key={feature.id}
              id={feature.id}
              name={feature.name}
              removeFeature={onRemoveClick}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
  AddedFeatures.propTypes = {
    features: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    removeFeature: PropTypes.func.isRequired
  };
};

export default connect(
  state => {
    features: state.car.features;
  },
  { removeFeature }
)(AddedFeatures);
