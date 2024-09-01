import { createStore } from "redux";
import { Reducer } from "./redux/Reducers/reducer";
export const store=createStore(Reducer);