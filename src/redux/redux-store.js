import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./findUsers-reducer";
import musicReducer from "./music-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	findUsers: findUsersReducer,
	music: musicReducer
});

let store = createStore(reducers);

export default store;