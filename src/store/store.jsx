import { configureStore } from "@reduxjs/toolkit";
import { kanbanApi } from "@store/kanbanApi";
import modalReducer from "./slices/modalSlice";
import sideBarReducer from "./slices/sideBarSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    sideBar: sideBarReducer,
    [kanbanApi.reducerPath]: kanbanApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(kanbanApi.middleware)
});

export default store;
