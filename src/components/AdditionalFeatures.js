import React from "react";
// import PropTypes from "prop-types";
import AdditionalFeature from "./AdditionalFeature";

import { useSelector } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeatures = ({ additionalFeatures, addFeature }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((feature, index) => (
            <AdditionalFeature key={index} id={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
// AdditionalFeatures.propTypes = {
//   additionalFeatures: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       added: PropTypes.bool.isRequired
//     }).isRequired
//   ).isRequired,
//   addFeature: PropTypes.func.isRequired
// };

const mapStateToProps = state => {
  return {
    additionallFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
