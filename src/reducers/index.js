import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import { reducer as FormReducer } from "redux-form";
import streamsReducer from "./streamsReducer";
export default combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  streams: streamsReducer,
});
