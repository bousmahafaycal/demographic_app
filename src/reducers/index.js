import { combineReducers } from 'redux';
import CountriesReducer from "./reducer-countries"

const rootReducer = combineReducers({
    countries: CountriesReducer
});

export default rootReducer;
