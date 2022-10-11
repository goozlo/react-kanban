import {Provider} from "react-redux";
import store from "@store/store";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import '../src/styles/@global.scss';

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
      <Provider store={store}>
        <Story/>
      </Provider>
  ),
];
