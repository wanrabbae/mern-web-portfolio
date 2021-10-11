import { combineReducers } from "redux";
import aboutReducer from "./about";
import educationReducer from "./education";

export default combineReducers({
    educations: educationReducer,
    abouts: aboutReducer
})