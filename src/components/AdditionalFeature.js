import React from "react";
import PropTypes from "prop-types";

const AdditionalFeature = ({ addFeature, name, price, added, id }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <input
        type="submit"
        value={id}
        className="button"
        onClick={() => {
          addFeature({ id });
        }}
      >
        Add
      </button>
      <h3 className={added ? "visible" : "hidden"}>
        {name} (+{price})
      </h3>
    </li>
  );

  AdditionalFeature.propTypes = {
    addFeature: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    added: PropTypes.bool.isRequired
  };
};

export default AdditionalFeature;
