import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = ({ addFeature, feature, id }) => {
  const handleAdd = () => {
    addFeature(feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button type="submit" value={id} className="button" onClick={handleAdd}>
        Add
      </button>
      {name} (+{price})
    </li>
  );
};
// AdditionalFeature.propTypes = {
//   addFeature: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
// };

const mapStateToProps = state => {
  return {
    id: state.additionalFeatures.id,
    name: state.additionalFeatures.name,
    price: state.additionalFeatures.price
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
