import React, { useState } from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { addFeature, removeFeature } from "./actions/index";
import { removeFeature } from "./actions/index";

import { connect } from "react-redux";

const App = ({
  car,
  additionalFeatures,
  additionalPrice,
  addFeature,
  removeFeature
}) => {
  const [featureAdded, setFeatureAdded] = useState(false);

  const onAddClick = e => {
    e.preventDefault();
    setFeatureAdded(e.target.value);
    addFeature(e);
  };

  const onRemoveClick = feature => {
    setFeatureAdded(false);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} onRemoveClick={onAddClick} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures}
          onAddClick={addFeature}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
