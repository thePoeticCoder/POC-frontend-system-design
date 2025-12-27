import {configureStore} from "@reduxjs/toolkit";
import { customReducers } from "./reducers";
const store = configureStore({
	reducer:customReducers,
});
export default store;