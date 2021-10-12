import {
    combineReducers
} from "redux";
import aboutReducer from "./about";
import educationReducer from "./education";
import experienceReducer from './experience';
import skillsReducer from './skill';
import projectReducer from './project';
import certificateReducer from './certificate'

export default combineReducers({
    educations: educationReducer,
    abouts: aboutReducer,
    experiences: experienceReducer,
    skills: skillsReducer,
    projects: projectReducer,
    certificates: certificateReducer
})