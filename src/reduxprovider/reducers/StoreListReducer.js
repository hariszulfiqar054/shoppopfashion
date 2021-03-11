import type from "../types";

const initialState = { storList: [] };

const StoreListReducer = (state = initialState, action) => {
    ('action', action)
    return Object.assign({}, state, action.data);
};

export default StoreListReducer;
