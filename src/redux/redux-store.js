import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./findUsers-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	findUsers: findUsersReducer
});

let store = createStore(reducers);

export default store;