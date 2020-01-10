export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
  console.log(feature);
  return {
    type: ADD_FEATURE,
    payload: [...state.car.features, feature]
  };
};

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: [...state.car.features]
  };
};
