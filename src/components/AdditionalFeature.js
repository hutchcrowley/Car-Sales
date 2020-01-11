import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addFeature } from "../actions/index";

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    addFeature(props.feature);
    dispatch(addFeature(props.feature));
  };
  return (
    <li>
      <button
        type="submit"
        value={props.feature.id}
        className="button"
        onClick={handleAdd}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
AdditionalFeature.propTypes = {
  addFeature: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

// const mapStateToProps = state => {
//   return {
//     id: state.additionalFeatures.id,
//     name: state.additionalFeatures.name,
//     price: state.additionalFeatures.price
//   };
// };

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
export default AdditionalFeature;
